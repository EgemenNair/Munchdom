import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({
      username,
      email,
      password,
    });
    const createdUser = await newUser.save();
    res.json(createdUser);
  } catch (error) {
    res.json({ status: 'error', error });
  }
};

export const logUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ status: 'error', user: false });
    }
    if (user) {
      const same = await bcrypt.compare(password, user.password);
      if (same) {
        const token = jwt.sign(
          {
            email,
            password,
          },
          process.env.JWT_SECRET,
        );
        return res.json({ status: 'ok', user: token });
      }
    } else {
      return res.json({ status: 'error', user: false });
    }
  } catch (error) {
    res.json({ status: 'error', error });
  }
};
