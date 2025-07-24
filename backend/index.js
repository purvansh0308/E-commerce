import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authroute.js';
dotenv.config()
import cors from "cors"
import userRoutes from './routes/userroute.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoute.js';
const port = process.env.PORT

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    credentials:true
}))
app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product" ,productRoutes)
app.use("/api/cart",cartRoutes);
app.use("/api/order",orderRoutes);
app.listen(8000,()=>{
    console.log("hello from server")
    connectDb(); 
});