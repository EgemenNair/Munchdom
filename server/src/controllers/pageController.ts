import { Request, Response } from 'express';
import User from '../models/User';

export const getIndexPage = async (req: Request, res: Response) => {
  res.status(200).send('Welcome');
};

export const postIndexPage = async (req: Request, res: Response) => {
  const newUser = new User({
    name: 'Test Name 2',
    email: 'Test Mail 2',
    password: 'Test Password 2',
  });
  const createdUser = await newUser.save();
  res.json(createdUser);
};
