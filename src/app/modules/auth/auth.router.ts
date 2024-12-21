import express from 'express';
import validateData from '../../middleware/validateData';
import { AuthValidation } from './auth.validation';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post(
  '/register',
  validateData(AuthValidation.registerUserSchema),
  AuthController.registerUser,
);

export default router;
