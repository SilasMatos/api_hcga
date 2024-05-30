import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  birthDate: Date;
  role: string;
  phone: string;
  username: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthDate: { type: Date, required: true },
  role: { type: String, required: true },
  phone: { type: String, required: true },
  username: { type: String, required: true }
});

export default mongoose.model<IUser>('User', UserSchema);
