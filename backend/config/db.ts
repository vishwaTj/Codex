import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://tjvishwa88:4Uhm26rg1w3n692h@cluster0.te4ki4z.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`Mongo Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.log(`Error : ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
