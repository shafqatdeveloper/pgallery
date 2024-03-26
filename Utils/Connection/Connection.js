import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {});
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error Connecting to DB ", error.message);
  }
};
