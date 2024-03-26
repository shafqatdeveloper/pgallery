import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://msr:Mshafqat@cluster0.ovk8fn9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {}
    );
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error Connecting to DB ", error.message);
  }
};
