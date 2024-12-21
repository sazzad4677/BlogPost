import { Blog } from './blog.model';
import { IBlog } from './blog.interface';
import { JwtPayload } from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import QueryBuilder from '../../QueryBuilder';

const getBlogs = async (query: Record<string, unknown>) => {
  const blogQuery =  new QueryBuilder(Blog.find().select("-isPublished").populate({
    path: 'author',
    select: 'name _id',
  }), query).search().sort().filter();
  const result = await blogQuery.modelQuery
  return result;
}

const createBlog = async (payload: IBlog) => {
  const blog = await Blog.create(payload);
  const blogWithAuthor = await blog.populate({
    path: 'author',
    select: 'name _id',
  });
  return blogWithAuthor;
};

const updateBlog = async (user: JwtPayload, blogId: string, payload: IBlog) => {
  const blog = await Blog.findOne({ _id: blogId })
    .select('-isPublished')
    .populate({
      path: 'author',
      select: 'name _id',
    });

  if (!blog) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Blog not found');
  }
  if (!blog.author._id.equals(user._id)) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      'You are not authorized to update this blog',
    );
  }
  Object.assign(blog, payload);
  const updatedBlog = await blog.save();
  return updatedBlog;
};
const deleteBlog = async (user: JwtPayload, blogId: string) => {
  const blog = await Blog.findById(blogId)
  if (!blog) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Blog not found');
  }
  if (!blog.author._id.equals(user._id)) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      'You are not authorized to delete this blog',
    );
  }
  const result = await Blog.findByIdAndDelete(blogId);
  return result;
};

export const BlogService = {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
