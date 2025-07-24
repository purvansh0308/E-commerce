import express from "express"
import {AdminLogin, googleLogin, logOut, login, registration } from "../controller/authcontroller.js";

const authRoutes = express.Router();
authRoutes.post("/registration",registration);
authRoutes.post("/login",login);
authRoutes.get("/logout",logOut);
authRoutes.post("/googleLogin",googleLogin);
authRoutes.post("/adminlogin",AdminLogin);

export default authRoutes;