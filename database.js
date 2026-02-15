import mongoose from "mongoose";

export default async () => {
  try {
    const MONGO_URL = process.env.MONGO_URI;
    await mongoose.connect(MONGO_URL, {
      dbName: "nurserySystem",
    });

    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    throw err;
  }
};
