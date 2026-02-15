import mongoose from "mongoose";

const class_schema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 2,
    },
    supervisor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teacher",
      required: true,
    },
    children: [
      {
        type: Number,
        ref: "Child",
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Class", class_schema, "class");
