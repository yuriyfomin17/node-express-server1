import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },
  name: { type: String, required: false },
});

export default mongoose.model('User', userSchema);
