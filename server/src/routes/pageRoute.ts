import express from 'express';
import * as pageController from '../controllers/pageController';

export const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/register').post(pageController.postRegister);
