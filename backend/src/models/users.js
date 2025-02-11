import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please Add First Name"],
    },
    lastName: {
      type: String,
      required: [true, "Please Add Last Name"],
    },
    bio: {
      type: String,
      default: "",
    },
    profilePicUrl: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const users = mongoose.model("users", usersSchema);
