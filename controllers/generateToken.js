import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const generateToken = (username) => {
  return jwt.sign({username:username}, process.env.SECRET, { expiresIn: '60s' });
}

export default generateToken;