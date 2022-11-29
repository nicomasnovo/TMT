//Import required packages
import express from 'express';
//Import route controller (What this route is gonna excecute? Business logic maybe)
import UsersCtrl from '../controllers/users.js';
//Define express router
const router = express.Router();

//Define Routes for this Feature
router.get('/users', UsersCtrl.getUsers);
router.post('/user', UsersCtrl.createUser);
//export this feature routes
export default router;
