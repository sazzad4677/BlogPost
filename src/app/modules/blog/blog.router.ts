import express from 'express';
import { BlogController } from './blog.controller';
import auth from '../../middleware/auth';
import { UserRole } from '../users/users.constant';
import ValidateData from '../../middleware/validateData';
import { BlogValidation } from './blog.validation';

const router = express.Router();

router.post('/', auth(UserRole.USER), ValidateData(BlogValidation.createBlogValidation), BlogController.createBlog);
router.patch('/:id', auth(UserRole.USER), ValidateData(BlogValidation.updateBlogValidation), BlogController.updateBlog);
router.delete('/:id', auth(UserRole.USER), BlogController.deleteBlog);
router.get('/', BlogController.getBlog);

export const BlogRouter = router;
