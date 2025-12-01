import pool from "../db/pool.js";

export  const createPost = async(req,res) =>{
      try{
        const{title,desc} = req.body;
        const user_id = req.user.id
        console.log(user_id,title,desc)
        const result = await pool.query(
            "INSERT INTO posts(user_id, title,content) VALUES ($1, $2, $3) RETURNING *;",
             [user_id, title, desc]
        )
        console.log(result)
        return res.status(201).json({message:"post created "})

      }catch(err){
        console.log(err)
         res.status(500).json({ error: "Server error" });
      }
}

export const showPosts =async(req,res)=>{
        try{
          const result = await pool.query(
            "SELECT * from posts ORDER BY created_at DESC")
            res.json(result.rows)

        }catch(error){
          console.error(error)
          res.status(500).json({error:"server error"})
        }
        
}