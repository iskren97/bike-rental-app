import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  bike: { type: mongoose.Schema.Types.ObjectId, required: true },
  bikeStatus: { type: Boolean, required: true },
  pickUpDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
});

const BookingModel = mongoose.model('bookings', bookingSchema);

export default BookingModel;
