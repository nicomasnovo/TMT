import express from 'express';

import UsersCtrl from '../../controllers/users.js';
import LoginCtrl from '../../controllers/login.js';

const router = express.Router();

//Define Routes for this Feature
router.post('/login', LoginCtrl.login);
router.post('/register', UsersCtrl.createUser);

export default router;
