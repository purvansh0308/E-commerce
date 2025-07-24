import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
   {
    name:{
          type:String,
          require:true,
    },
    email:{
        type:String,
        unique:true,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    cartData:{
        type:Object,
        default:{}
    }
  },{timestamps:true,minimize:false}
)
const User = mongoose.model("User",userSchema)
export default User;