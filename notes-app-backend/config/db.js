import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export async function Connectingdb(){
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000, // 30 seconds to try to connect
        socketTimeoutMS: 45000,
        
        });
        console.log(mongoose.connection.readyState);
        
    } catch (err) {
        console.error(err.message);
        
    }
}

export default Connectingdb;


// /notes-app-backend
// │
// ├── controllers/
// │   └── noteController.js
// │   └── authController.js
// ├── models/
// │   └── User.js
// │   └── Note.js
// ├── routes/
// │   └── noteRoutes.js
// │   └── authRoutes.js
// ├── middleware/
// │   └── authMiddleware.js
// ├── config/
// │   └── db.js
// ├── .env
// ├── server.js
// └── package.json
