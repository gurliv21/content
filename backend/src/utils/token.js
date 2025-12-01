import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()
export const generateToken=(payload)=>{
    const secret =process.env.JWT_SECRET
    const expiresIn=process.env.JWT_EXPIRES_IN
 console.log(secret,expiresIn)
     return jwt.sign(payload,secret,{expiresIn})
}