import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AdminService } from './admin.service';

const blockUser = catchAsync(async (req, res, next) => {
  await AdminService.blockUser(req.params.userId);
  sendResponse(res, {
    statusCode: 200,
    message: 'User Successfully blocked',
    success: true,
  })
})

const deleteBlog = catchAsync(async (req, res, next) => {
  await AdminService.deleteBlog(req.params.id)
  sendResponse(res, {
    statusCode: 200,
    message: 'Blog deleted successfully',
    success: true,
  })
})

export const AdminController = {
  blockUser,
  deleteBlog
}