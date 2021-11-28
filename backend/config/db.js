import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(
     process.env.URI,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(
      `Mongodb connected at : ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(`Error : ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
