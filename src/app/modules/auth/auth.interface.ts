import { Types } from 'mongoose';

export interface IRegisterUser {
  name: string;
  email: string;
  _id: Types.ObjectId
}