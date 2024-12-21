import AppError from '../../errors/AppError';
import { User } from '../users/users.model';
import { IUser } from '../users/users.interface';

const registerUser = async (payload: IUser) => {
  const isUserExist = await User.isUserExist(payload.email);
  if (isUserExist) {
    throw new AppError(400, 'User already exist',);
  }
  const result = await User.create(payload);
  return result;
};

export const AuthService = {
  registerUser,
};
