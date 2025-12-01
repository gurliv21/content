import bcrypt from "bcryptjs";
import pool from "../db/pool.js";
import { generateToken } from "../utils/token.js";
export const singUp=async(req,res)=>{
    try{
        const{username,password} = req.body
        if(!username || !password){
            return res.status(400).json({ message: "username or password cannot be empty" });
        }

        const exist =await  pool.query("SELECT * FROM users WHERE username =$1 ",[username])
        if(exist.rows.length>0){
            return res.status(201).json({message:"user already exists"})
        }
        const hashed = await bcrypt.hash(password, 10);

        const result = await pool.query("INSERT INTO users(username,password) VALUES($1,$2) RETURNING *",[username,hashed])
        const user = result.rows[0]
        //  return res.status(201).json({user})
         const token = generateToken({ id: user.id, username: user.username, role: user.role });
         return res.status(201).json({message:"sign up sucessful",token,user})

    }catch(err){
        return res.status(500).json({ message: err.message });

    }
}
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "username and password required" });
    }

    const  result  = await pool.query(
      "SELECT * FROM users WHERE username=$1",
      [username]
    );

    if (result.length === 0) {
      return res.status(400).json({ error: "invalid credentials" });
    }

    const user=result.rows[0]
    console.log(user)


    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "invalid credentials" });
    }


    const token = generateToken({ id: user.id, username: user.username, role: user.role });


    return res.json({
        message:"login sucessfull",user,
      token,
    });
  } catch (err) {
    console.error("login error:", err);
    return res.status(500).json({ error: "Server error" ,err});
  }
};