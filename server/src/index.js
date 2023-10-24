import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    `mongodb+srv://iskrengyorev:${process.env.APP_DB_PASS}@cluster0.8ohdtya.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log('Connected to db'));

app.listen(4000);
