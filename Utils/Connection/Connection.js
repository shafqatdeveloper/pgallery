import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://mshafqat3436:Msr102030@cluster0.dwnhd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error Connecting to DB ", error.message);
  }
};
