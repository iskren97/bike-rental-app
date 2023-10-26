import mongoose from 'mongoose';

const bikesSchema = new mongoose.Schema({
  model: { type: String, required: true },
  color: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  availability: { type: Boolean, required: true },
  reservedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    default: null,
  },
});

const BikeModel = mongoose.model('bikes', bikesSchema);

export default BikeModel;
