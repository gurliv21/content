import pool from "./pool.js";

export const testJs= async()=>{
    const username = "hello";
const password = "abc123";
const role = "user";

    try{
        console.log("i am here uuuuuu")
        const res = await pool.query(
     'SELECT * FROM users'
    );
        console.log(res.rows)
        console.log("did it end")
    }catch(error){
        console.log("is this the error ",error)

    }finally{
        pool.end()
    }
}

testJs()