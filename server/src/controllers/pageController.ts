import { Request, Response } from 'express';
import User from '../models/User';

export const getIndexPage = async (req: Request, res: Response) => {
  res.status(200).send('Welcome');
};

export const postIndexPage = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const newUser = new User({
    username,
    email,
    password,
  });
  const createdUser = await newUser.save();
  res.json(createdUser);
};
