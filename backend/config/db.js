import mongoose from "mongoose";
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/GYMDB";

// Providing DATABASE
const ConnectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("DataBase Connected...");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default ConnectDB;
