import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const OPTIONS = {
      dbName: process.env.COLLECTION_NAME,
    };
    const result = await mongoose.connect(DATABASE_URL, OPTIONS);
    if (result) {
      console.log("Database connected sucessfully");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
