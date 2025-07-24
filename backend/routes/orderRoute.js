import express, { Router } from 'express';
import isAuth from '../middleware/isAuth.js'; // add `.js` if using ES modules
import adminAuth from '../middleware/adminAuth.js'
import { allOrders, placeOrder, placeOrderRazorpay, updateStatus, userOrders, verifyRazorpay } from '../controller/orderController.js';


const orderRoutes = Router();
//for user
orderRoutes.post("/placeorder", isAuth, placeOrder);
orderRoutes.post("/razorpay", isAuth, placeOrderRazorpay);
orderRoutes.post("/userorder", isAuth, userOrders);
orderRoutes.post("/verifyrazorpay", isAuth, verifyRazorpay);
// for admin
orderRoutes.post("/list", adminAuth , allOrders);
orderRoutes.post("/status", adminAuth, updateStatus);

export default orderRoutes;
