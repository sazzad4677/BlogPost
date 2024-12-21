import { User } from '../users/users.model';
import { Blog } from '../blog/blog.model';

const blockUser = async (userId: string) => {
  const result = await User.findByIdAndUpdate(userId, { isBlocked: true });
  return result;
};

const deleteBlog = async (blogId: string) => {
  const result = await Blog.findByIdAndDelete(blogId);
  return result;
}

export const AdminService = {
  blockUser,
  deleteBlog
};