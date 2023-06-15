import { Request, Response } from 'express';
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
    const user = await User.findOne({ email, password });
    if (user) {
      return res.json({ status: 'ok', user: true });
    } else {
      return res.json({ status: 'error', user: false });
    }
  } catch (error) {
    res.json({ status: 'error', error });
  }
};
