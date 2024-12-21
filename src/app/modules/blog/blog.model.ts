import { IBlog } from './blog.interface';
import { model, Schema } from 'mongoose';

const blogSchema = new Schema<IBlog>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, {
  timestamps: false,
  versionKey: false,
});

export const Blog = model<IBlog>('Blog', blogSchema);
