import pool from "./pool.js";

const testJs= async()=>{
    const username = "hello";
const password = "abc123";
const role = "user";

    try{
        console.log("i am here ")
        const res = await pool.query(
     'SELECT NOW()'
    );
        console.log(res.rows)
    }catch(error){
        console.log(error)

    }finally{
        pool.end()
    }
}

testJs()