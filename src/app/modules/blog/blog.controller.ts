import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogService } from './blog.service';
import { StatusCodes } from 'http-status-codes';

const getBlog =catchAsync(async (req, res, next) => {
  const result = await BlogService.getBlogs(req.query);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog Successfully retrieved',
    success: true,
    data: result,
  });
})

const createBlog = catchAsync(async (req, res, next) => {
  const data = { ...req.body, author: req.user._id };
  const result = await BlogService.createBlog(data);
  const refinedData = {
    _id: result._id,
    title: result.title,
    content: result.content,
    author: result.author,
  };
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Blog Successfully created',
    success: true,
    data: refinedData,
  });
});

const updateBlog = catchAsync(async (req, res, next) => {
  const result = await BlogService.updateBlog(req.user, req.params.id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog Successfully updated',
    success: true,
    data: result,
  });
});
const deleteBlog = catchAsync(async (req, res, next) => {
  await BlogService.deleteBlog(req.user, req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog Successfully deleted',
    success: true,
  });
});

export const BlogController = {
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog
};
