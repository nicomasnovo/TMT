import mongoose from 'mongoose';
import config from '../../config/config.js';

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

export default db;
