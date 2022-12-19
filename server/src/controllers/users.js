//Import necessary Model for this feature
import User from '../models/User/schema.js';

//Controller to create user
const createUser = (req, res) => {
  const body = req.body;

  if (!body) {
    const bodyError = {
      success: false,
      error: 'You must provide a User',
    };

    return res.status(400).json(bodyError);
  }

  const user = new User(body);

  if (!user) return res.status(400).json({ success: false, error: err });

  user.password = user.generateHash(user.password);

  user
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: user._id,
        message: 'User created!',
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: 'User not created!',
      });
    });
};
//Controller to get all users
const getUsers = async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) return res.status(400).json({ success: false, error: err });

    if (!users.length)
      return res.status(404).json({ success: false, error: `User not found` });

    return res.status(200).json({ success: true, data: users });
  }).catch((err) => console.log(err));
};

//Export controllers for your routes
export default {
  createUser,
  getUsers,
};
