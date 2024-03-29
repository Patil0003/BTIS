import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.set("strictQuery", true);

const MONGO_URI = `mongodb://${process.env.DATABASE_URL_LOCAL}`;
export const mongoconnection = async () => {
  try {
    await mongoose.connect(MONGO_URI, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Database Connected :- ${MONGO_URI}`);
      }
    });
  } catch (e) {
    console.log(e);
  }
};
