import express from 'express';
import * as authController from '../controllers/authController';

export const router = express.Router();

router.route('/register').post(authController.createUser);
router.route('/login').post(authController.logUser);
