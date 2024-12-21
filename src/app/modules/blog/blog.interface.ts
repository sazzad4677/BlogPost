import { Types } from 'mongoose';

export interface IBlog {
  title: string;
  content: string;
  isPublished: boolean;
  author: Types.ObjectId;
}