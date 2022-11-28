import express from 'express';
import bodyParser from 'body-parser';
import config from '../config/config.js';
import cors from 'cors';
import db from './db/index.js';
import usersRouter from './routes/user-router.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', usersRouter);

app.use('/health-check', (req, res) => {
  res.send("It's Working");
});

app.listen(config.PORT, () => {
  console.log(`Server is listening: http://localhost:${config.PORT}`);
});
