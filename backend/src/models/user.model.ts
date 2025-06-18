import mongoose, { Schema } from "mongoose";
import { UserProps } from "../types/user.ts";

const userSchema = new Schema<UserProps>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['technical', 'customer']
  },
})

export const User = mongoose.model<UserProps>("User", userSchema);
