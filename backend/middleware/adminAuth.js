import jwt from "jsonwebtoken"

const adminAuth = async(req , res , next)=>{
    try {
    let {token} = req.cookies;
    if(!token){
         return res.status(400).json({message:"Not Authorized login Again"})
    }
    let verifyToken = jwt.verify(token,process.env.JWT_SECRET);
    if(!verifyToken){
        return res.status(400).json({message:"Not Authorized login Again,Invalid token"})
    }
    req.adminEmail = process.env.ADMIN_EMAIL;

    next()
     } catch (error) {
            console.log("Admin auth error")
              return res.status(400).json({message:`Admin error ${error}`})      
    }
}
export default adminAuth;
 
