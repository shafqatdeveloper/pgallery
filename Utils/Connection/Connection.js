import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    mongoose.connect("mongodb://0.0.0.0:27017/pgallery");
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error Connecting to DB ", error.message);
  }
};
