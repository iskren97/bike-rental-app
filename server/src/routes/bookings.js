import express from 'express';
import BookingModel from '../models/Booking.js';
import BikeModel from '../models/Bikes.js';
import UserModel from '../models/Users.js';

const router = express.Router();

// create a booking
router.post('/', async (req, res) => {
  try {
    const { pickUpDate, returnDate, userID, bikeID } = req.body;

    const user = await UserModel.findById({ _id: userID });
    const bike = await BikeModel.findById({ _id: bikeID });

    bike.reservedBy = userID;
    bike.availability = false;
    user.reservedBikes.push(bike);

    await bike.save();
    await user.save();

    const booking = new BookingModel({
      bike,
      isAvailable: bike.availability,
      pickUpDate,
      returnDate,
    });
    await booking.save();

    res.status(201).send(booking);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// cancel/delete booking
router.delete('/:id', async (req, res) => {
  try {
    const booking = await BookingModel.findOneAndDelete({
      bike: req.params.id,
    });

    const bike = await BikeModel.findById({ _id: req.params.id });
    const user = await UserModel.findById({ _id: req.body.userID });

    if (!bike) {
      res.status(404).send();
    }

    user.reservedBikes = user.reservedBikes.filter(
      (objID) => objID.toString() !== req.params.id
    );
    bike.availability = true;
    bike.reservedBy = null;

    await bike.save();
    await user.save();

    res.send(booking);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export { router as bookingsRouter };
