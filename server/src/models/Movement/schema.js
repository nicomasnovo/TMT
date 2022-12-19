import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MovementSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      validate: validateType,
    },
    userId: {
      type: String,
      required: true,
    },
    paymentType: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

const validateType = (value) => {
  const validTypes = ['charge', 'payment'];
  if (!fruits.includes(value)) {
    throw new Error('Invalid movement type');
  }
  return;
};
//Export Schema
export default mongoose.model('User', MovementSchema);
