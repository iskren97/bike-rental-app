import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
  reservedBikes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'bikes',
    },
  ],
});

const UserModel = mongoose.model('users', userSchema);

export default UserModel;
