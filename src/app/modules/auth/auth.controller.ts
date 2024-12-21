import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.service';
import { IRegisterUser } from './auth.interface';

const registerUser = catchAsync(async (req, res, next) => {
  const user = req.body;
  const result = await AuthService.registerUser(user);
  const refinedData = {
    name: result.name,
    email: result.email,
    _id: result._id,
  };
  sendResponse<IRegisterUser>(res, {
    statusCode: 200,
    message: 'User Registered Successfully',
    success: true,
    data: refinedData,
  });
});

export const AuthController = {
  registerUser,
};
