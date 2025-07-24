import mongoose from "mongoose";
import dotenv from'dotenv'
dotenv.config();
const url = process.env.MONGODB_URL;
const connectDb = async()=>{
     try{
          await mongoose.connect(url)
          console.log("DB connected!!")
     }
     catch(error){
        console.log("mogodb is not connect",error);
     }

}
export default connectDb;