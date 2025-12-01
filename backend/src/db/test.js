import pool from "./pool.js";

const testJs= async()=>{
    const username = "hello";
const password = "abc123";
const role = "user";

    try{
        const res = await pool.query(
      "INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING *;",
      [username, password, role]
    );
        console.log(res.rows[0])
    }catch(error){
        console.log(error)

    }finally{
        pool.end()
    }
}

testJs()