import express from 'express';
import auth from '../../middleware/auth';
import { AdminController } from './admin.controller';
import { UserRole } from '../users/users.constant';

const router = express.Router();

router.patch(
  '/users/:userId/block',
  auth(UserRole.ADMIN),
  AdminController.blockUser,
);

router.delete('/blogs/:id', auth(UserRole.ADMIN), AdminController.deleteBlog);

export const AdminRouter = router;
