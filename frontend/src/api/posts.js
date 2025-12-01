import axios from 'axios'
import { api } from "../util/interceptor"
const URL ='http://localhost:4000/api/posts/'
export const getPosts =async()=>{
     try{
        const res = await axios.get(URL)
        console.log(res.data)
        return res.data

     }catch(error){
        console.error("error geting posts",error)
     }
}


export const createPost=async(payload)=>{
    try{
        const result =await api.post("/posts/create",payload)
         return result.data

    }catch(err){
        console.error("creating posts",err)
    }
}