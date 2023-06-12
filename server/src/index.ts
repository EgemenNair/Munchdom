// Module Imports
import express, { Express } from 'express';
import mongoose from 'mongoose';

import * as pageRoute from './routes/pageRoute';

// Express Config
const app: Express = express();
const PORT = 5000;

// Connect to MongoDB
const DB_USER = 'nairegemen';
const DB_PASSWORD = 'tcxbgY4gGDFQIWqK';
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@munchdom.eqsb5f0.mongodb.net/`;

mongoose.connect(DB_URL).then(() => {
  console.log(`⚡️[server]: DB connected at mongodb://localhost/munchdom`);
  // Listen to server
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}/`);
  });
});

// Middlewares

// Routes
app.use('/', pageRoute.router);
