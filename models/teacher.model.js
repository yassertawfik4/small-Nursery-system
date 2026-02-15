import mongoose from "mongoose";
const teacher_schema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("teacher", teacher_schema, "teacher");
