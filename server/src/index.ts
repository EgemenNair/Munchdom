// Module Imports
import { config } from 'dotenv';
config();

import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import * as authRoute from './routes/authRoute';

// Express Config
const app: Express = express();
const PORT = 5000;

// Connect to MongoDB
const { DB_USER, DB_PASSWORD } = process.env;
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@munchdom.eqsb5f0.mongodb.net/`;

mongoose.connect(DB_URL).then(() => {
  console.log(`⚡️[server]: DB connected at mongodb://localhost/munchdom`);
  // Listen to server
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}/`);
  });
});

// Middlewares
app.use(cors('*'));
app.use(express.json());

// Routes
app.use('/api/', authRoute.router);
