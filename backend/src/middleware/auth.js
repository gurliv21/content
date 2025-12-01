import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()
const auth=(req,res,next)=>{
    try{
      const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Authorization required" });
    }
    const token = header.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      id: payload.id,
      username: payload.username,
      role: payload.role,
    };
    next();

    }catch(err){
        console.error("auth middleware error:", err);
       return res.status(401).json({message:"invalid token"})
    }

}
export default auth