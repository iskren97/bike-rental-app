import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../models/Users.js';

const router = express.Router();

// register user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username });
    if (user) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const newUser = new UserModel({
      username,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// login user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username });

    if (!user) {
      throw new Error('User not found');
    }

    const checkPasswordValidity = await bcrypt.compare(password, user.password);

    if (!checkPasswordValidity) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.send({ user, token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// get all users
router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// update user by id
router.put('/:id', async (req, res) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// delete user by id
router.delete('/:id', async (req, res) => {
  try {
    const user = await UserModel.findOneAndDelete({
      _id: req.params.id,
    });

    if (!user) {
      res.status(404).send();
    }

    res.send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export { router as userRouter };
