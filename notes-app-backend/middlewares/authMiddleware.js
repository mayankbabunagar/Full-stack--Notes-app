import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {
    try {
    const token = req.cookies.accessToken; // 👈 Get token from cookie
    console.log(token);

    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);// gives payload
    console.log(decoded);
    req.user = await User.findById(decoded._id).select("-password");// req.user stores all user data now

    next();
    } catch (error) {
    console.error("Auth Middleware Error:", error);
    res.status(401).json({ message: "Not authorized, token failed" });
    }
};

export default protect; 