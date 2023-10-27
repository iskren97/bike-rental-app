import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

import { userRouter } from './routes/users.js';
import { bikesRouter } from './routes/bikes.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/users', userRouter);
app.use('/bikes', bikesRouter);

mongoose
  .connect(
    `mongodb+srv://iskrengyorev:${process.env.APP_DB_PASS}@cluster0.8ohdtya.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log('Connected to db'));

app.listen(4000);
