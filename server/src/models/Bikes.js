import mongoose from 'mongoose';

const bikesSchema = new mongoose.Schema({
  model: { type: String, required: true },
  color: { type: String, required: true },
  location: { type: Number, required: true },
  rating: { type: String, required: true },
  availability: { type: Boolean, required: true },
});

const BikeModel = mongoose.model('bikes', bikesSchema);

export default BikeModel;
