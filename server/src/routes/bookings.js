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

// // get all bookings
// router.get('/', async (req, res) => {
//   try {
//     const bookings = await BookingModel.find({});

//     if (bookings.length === 0) {
//       throw new Error('No bookings yet');
//     }

//     res.send(bookings);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

export { router as bookingsRouter };
