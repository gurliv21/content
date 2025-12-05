import { api } from "../util/interceptor"

export const signup=async(payload)=>{
    try{
        const result =await api.post("/auth/signup",payload)
         return result.data

    }catch(err){
        console.error("there is an error signing up",err)
    }
}

export const loginIn=async(payload)=>{
    try{
        const result =await api.post("/auth/login",payload)
         return result.data

    }catch(err){
        console.error("there is error signing up",err)
    }
}