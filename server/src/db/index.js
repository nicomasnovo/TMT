//Import required packages and proyect configuration
import mongoose from 'mongoose';
import config from '../../config/config.js';

//Connect to MongoDB with mongoose.connect method
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});
//This variable is just to simplify things
const db = mongoose.connection;
//Export DB conection
export default db;
