import mongoose from "mongoose";

const child_schema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
      minlength: 3,
    },
    age: {
      type: Number,
      required: true,
      min: 2,
      max: 6,
    },
    level: {
      type: String,
      required: true,
      enum: ["PreKG", "KG1", "KG2"],
    },
    address: {
      city: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      building: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Child", child_schema, "child");
