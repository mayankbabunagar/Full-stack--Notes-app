import  Express  from "express";
import mongoose from "mongoose";
import authRoutes from './routes/authRoutes.js'
import noteRoutes from './routes/noteRoutes.js'
import  Connectingdb  from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from 'cors';


const app= Express();
Connectingdb();

const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: 'GET,POST,PUT,DELETE',  
    credentials: true,               
    };
app.use(cors(corsOptions));


app.use(Express.json());
app.use(cookieParser());


app.use('/api/notes', noteRoutes);
app.use('/api/auth', authRoutes);



const PORT = process.env.PORT|| 6000;
app.listen(PORT, ()=>{console.log(`Server is running on ${PORT}`);});