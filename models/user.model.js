// models/user.model.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    photo: {
      url: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },
    firstName: {
      type: String,
    },
    LastName: {
      type: String,
    },

    credits: {
      type: Number,
      default: 5,
    },

    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
