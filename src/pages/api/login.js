// pages/api/login.js
import jwt from 'jsonwebtoken';

const handler = (req, res) => {
  const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  res.json({ token });
};

export default handler;
    