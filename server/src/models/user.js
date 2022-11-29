//Import mongoose to work with mongodb
import mongoose from 'mongoose';
//mongoose Schema class to create a new schema
const Schema = mongoose.Schema;

//this is a Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
//Export Schema
export default mongoose.model('User', userSchema);
