import mongoose from "mongoose";
import { db_name } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect
            (`${process.env.mongo_URI}/${db_name}`)
        console.log(`Host: ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.log(`Error: ${error}`);
        process.exit(1);
    }
}
export default connectDB;