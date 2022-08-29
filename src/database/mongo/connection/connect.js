import { config } from "dotenv";
import { mongoose } from "mongoose";

if (process.env.NODE_ENV !== "production") {
  config();
}

export class MongoDbConnection {
  async ConnectDb() {
    if (await mongoose.connect(process.env.DATABASE_URL))
      console.log("ConnectDb");
  }
}
