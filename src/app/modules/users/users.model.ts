import { model, Schema } from 'mongoose';
import { IUser, UserModel } from './users.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import { UserRole } from './users.constant';

const userSchema: Schema<IUser, UserModel> = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    role: { type: String, enum: Object.values(UserRole), default: 'user' },
    isBlocked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.statics.isUserExist = async function (
  email: string,
): Promise<IUser | null> {
  const user = await this.findOne({ email }).select('+password');
  return user;
};

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});


export const User = model<IUser, UserModel>('User', userSchema);
