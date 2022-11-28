import express from 'express';
import UsersCtrl from '../controllers/users.js';

const router = express.Router();

router.get('/users', UsersCtrl.getUsers);
// router.get('/user/:id', UsersCtrl.getUsersById);
router.post('/user', UsersCtrl.createUser);
// router.put('/user/:id', UsersCtrl.updateUser);
// router.delete('/user/:id', UsersCtrl.deleteUser);

export default router;
