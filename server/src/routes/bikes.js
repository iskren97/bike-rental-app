import express from 'express';
import BikeModel from '../models/Bikes.js';

const router = express.Router();

// list a bike
router.post('/create', async (req, res) => {
  try {
    const bike = new BikeModel(req.body);

    await bike.save();
    res.send(bike);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// get all listed bikes
router.get('/', async (req, res) => {
  try {
    const bikes = await BikeModel.find({});

    if (bikes.length === 0) {
      throw new Error('No bikes yet');
    }

    res.send(bikes);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// git current user reserved bikes by id
router.get('/reservedBikes/:userID', async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    const reservedBikes = await BikeModel.find({
      _id: { $in: user.reservedBikes },
    });

    res.send({ reservedBikes });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// update bake by id
router.put('/:id', async (req, res) => {
  try {
    const bike = await BikeModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    await bike.save();
    res.send(bike);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// delete bike by id
router.delete('/:id', async (req, res) => {
  try {
    const bike = await BikeModel.findOneAndDelete({
      _id: req.params.id,
    });

    if (!bike) {
      res.status(404).send();
    }

    res.send(bike);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export { router as bikesRouter };
