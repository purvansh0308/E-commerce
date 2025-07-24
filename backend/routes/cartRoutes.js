import express, { Router } from 'express'
import { addToCart,getUserCart,UpdateCart } from '../controller/cartController.js';
import isAuth from '../middleware/isAuth.js'

const cartRoutes = Router()

cartRoutes.post('/get',isAuth,getUserCart);
cartRoutes.post('/add',isAuth ,addToCart);
cartRoutes.post('/update',isAuth,UpdateCart)



export default cartRoutes;