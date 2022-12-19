import bcrypt from 'bcrypt';
import User from '../models/User/schema.js';

const login = (req, res) => {
  const body = req.body;

  if (!body) {
    const bodyError = {
      success: false,
      error: 'You must provide a User',
    };

    return res.status(400).json(bodyError);
  }

  const { email, password } = req.body;

  const user = User.findOne({ email })
    .then(async (user) => {
      const acceptedPassword = await bcrypt.compare(password, user.password);
      const status = acceptedPassword ? 200 : 401;

      const { name, email, _id } = user;

      const userResponse = {
        email,
        name,
        id: _id,
      };

      const response = acceptedPassword ? userResponse : 'Unauthorized';

      return res.status(status).json({ success: true, data: response });
    })
    .catch((err) => res.status(400).json({ success: false, error: err }));
};

export default { login };
