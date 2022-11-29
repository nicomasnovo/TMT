//Import required packages and proyect configuration
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from '../config/config.js';
import db from './db/index.js';

//Import endpoint routes
import usersRouter from './routes/user-router.js';

//Define express app
const app = express();
//Add body json parser and cors
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
//DB on error log
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Apply imported routes
app.use('/api', usersRouter);
//Healthcheck endpoint for App status checking
app.use('/health-check', (req, res) => {
  res.send("It's Working");
});
//Start Express App on preconfigured port in this case PORT=3000
app.listen(config.PORT, () => {
  console.log(`Server is listening: http://localhost:${config.PORT}`);
});
