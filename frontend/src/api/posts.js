import axios from 'axios'
import { api } from "../util/interceptor"
export const getPosts =async()=>{
     try{
        const res = await api.get("/posts")
        console.log(res.data)
        return res.data

     }catch(error){
        console.log("error geting posts",error)
     }
}


export const createPost=async(payload)=>{
    try{
        const result =await api.post("/posts/create",payload)
         return result.data

    }catch(err){
        console.log("creating posts",err)
    }
}