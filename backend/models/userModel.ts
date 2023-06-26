import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

interface UserProps extends Document {
  name: string;
  email: string;
  password?: string;
}

export interface UserDoc extends UserProps {
  matchPassword: (enteredPassword: string) => Promise<boolean>;
}

const userSchema: Schema<UserDoc> = new mongoose.Schema<UserDoc>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
}, {
  timestamps: true,
});

userSchema.methods.matchPassword = async function (enteredPassword: string): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password || '');
};

userSchema.pre<UserDoc>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password || '', salt);
});

const User: Model<UserDoc> = mongoose.model<UserDoc>('User', userSchema);

export default User;
