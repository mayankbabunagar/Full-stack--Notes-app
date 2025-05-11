import dotenv from 'dotenv';
dotenv.config();
import User from '../models/User.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const generateToken=(_id)=>{
    const accessToken = jwt.sign({_id}, process.env.JWT_SECRET,{expiresIn:'30d'});
    const Refreshtoken = jwt.sign({_id}, process.env.REFRESH_JWT_SECRET,{expiresIn:'30d'});
    return {accessToken, Refreshtoken};
}
export const registeredUser = async (req,res)=>{
    const {name, email, password}   = req.body;
    const exist =  await User.findOne({email})
    if(exist){
        return res.status(400).json({message:'User already exists'});
    }
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
        }
        console.log(password);
    const encPass = await  bcrypt.hash(password, 10);
    console.log(encPass);
    console.log(password);

    const user = await User.create({name:name,email:email,password:encPass});
    const {accessToken, Refreshtoken} = generateToken(user._id);
    // console.log(user);
    console.log(user._id);
    await User.findByIdAndUpdate(user._id, {
        $set: { Refreshtoken},
        }, {new:true} );
    //     console.log('refreshtoken', Refreshtoken);
    // console.log('accessToken', accessToken);
    


    // const user = new User({
    //     name,
    //     email,
    //     password: encPass,  
    //     });

    //     await user.save();
    // res.status(201).json({
    //     _id:user._id,
    //     name:user.name,
    //     email:user.email,
    //     token:generateToken(user._id)
    // })
    
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // true in production
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });
    res.cookie('Refreshtoken', Refreshtoken, {
        httpOnly: true, // true in production
        sameSite: 'strict',
        secure: false,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        // token: token  // optional, since it's in cookie
    });
}


export const loginUser = async (req,res)=>{
    const {email , password}=req.body;
    const user = await User.findOne({email});
    if(user&&(await bcrypt.compare(password, user.password))){
        // res.json({
        //     _id:user._id,
        //     name:user.name,
        //     email:user.email,
        //     token:generateToken(user._id)
        // });
        const {accessToken,Refreshtoken } = generateToken(user._id)
        res.cookie('accessToken', accessToken, {
            httpOnly: true, // true in production
            sameSite: 'strict',
            secure: false,
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        });
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // token: token  // optional, since it's in cookie
        });
        
    }
    else{
        res.status(401).json({message:'invalid credentials'});
    }
}
