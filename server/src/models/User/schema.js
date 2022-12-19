//Import mongoose to work with mongodb
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
//mongoose Schema class to create a new schema
const Schema = mongoose.Schema;

//this is a Schema
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

UserSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, 10);
};

// UserSchema.methods.validPassword = (password) => {
//   return bcrypt.compareSync(password, this.password);
// };

//Export Schema
export default mongoose.model('User', UserSchema);
