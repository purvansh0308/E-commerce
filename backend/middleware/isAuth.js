import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(400).json({ message: "Token not found" }); // ✅ proper return
        }

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

        if (!verifyToken) {
            return res.status(400).json({ message: "User doesn't have a valid token" }); // ✅ proper return
        }

        req.userId = verifyToken.userId;
        next(); // ✅ only call next once
    } catch (error) {
        console.log("isAuth error", error.message);
        return res.status(500).json({ message: `isAuth error: ${error.message}` }); // ✅ return after error
    }
};

export default isAuth;
