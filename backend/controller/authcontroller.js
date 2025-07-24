import User from '../model/userModel.js';
import validator from 'validator'
import bcrypt from 'bcryptjs'
import { genToken, genToken1 } from "../config/token.js";

export const registration = async(req,res)=>{
    try{
        const{name,email,password}= req.body;
       const exitUser = await User.findOne({email})
       if(exitUser){
          return res.status(400).json({message:"User already exit"})
       }
       if(!validator.isEmail(email)){
        return res.status(400).json({message:"Enter valid Email"})
       }
       if(password.length<8){
        return res.status(400).json({message:"Enter strong password"})
       }
       const salt = 10;
       let hashpassword = await bcrypt.hash(password,salt);
       const user = await User.create({name,email,password:hashpassword})
       let token = await genToken({userId:user._id});
       res.cookie("token",token,{
        httpOnly: true,
        secure: false,
        sameaSite:"Strict",
        maxAge: 7*24*60*60*1000
       })
       return res.status(201).json(user)    
    }catch(error){
          console.log("SIGNUP error")
          return res.status(500).json({message:`registration error ${error}`})
    }
}



export const login = async(req,res)=>{
    try{
        let{email,password} = req.body;
        let user = await User.findOne({email})
       if(!user) return res.status(404).json({message:"user not found"})
       let ismatch = await bcrypt.compare(password,user.password);
        if(!ismatch) return res.status(400).json({massage:"Incorrect password"})
       let token = await genToken({userId:user._id})   
       res.cookie("token",token,{
        httpOnly: true,
        secure: false,
        sameaSite:"Strict",
        maxAge: 7*24*60*60*1000
       }) 
       console.log("login sucess")
       return res.status(201).json(user);     
    }catch(error){
                console.log("login error")
                return res.status(500).json({message:`login error ${error}`})
    }
}
export const logOut = async(req,res)=>{
   try{
       res.clearCookie("token")
       return res.status(200).json({message:"logout successfully"})
   }
   catch(error){
        console.log("log error")
        return res.status(500).json({message:`logOut error ${error}`})
   }    
}


export const googleLogin = async(req,res)=>{
    try{
        let {name,email} = req.body;
        let user = await User.findOne({email})
        if(!user){
           user = await User.create({
            name,email
           })
        }
       let token = await genToken({userId:user._id})   
       res.cookie("token",token,{
        httpOnly: true,
        secure: false,
        sameaSite:"Strict",
        maxAge: 7*24*60*60*1000
       }) 
       return res.status(200).json(user);
    }catch(error){
         console.log("google login error")
         return res.status(500).json({message:`google login error ${error}`})
    }
}
export const AdminLogin = async(req, res)=>{
    try {
        let{email,password} = req.body;
        if(email===process.env.ADMIN_EMAIL && password ===process.env.ADMIN_PASSWORD){
          let token = await genToken1(email)   
            res.cookie("token",token,{
            httpOnly: true,
            secure: false,
            sameaSite:"Strict",
            maxAge: 1*24*60*60*1000
       })
         return res.status(200).json(token);    
    }
    return res.status(400),json({message:"Invaild credientials"})
    } catch (error) {
         console.log("AfdminLogin error",error)
         return res.status(500).json({Message:`AdminLogin error ${error}`})
    }
}