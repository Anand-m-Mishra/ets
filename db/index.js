import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB Connected !! DB host: ${connectionInstance.connection.host}`)
    }catch{
        console.log("Error connecting to DB",error);
        process.exit(1)
    }
}

export default connectDB