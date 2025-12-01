// components/LoginModal.tsx
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeLogin,openSignup } from "../redux/slices/modalSlice";
import { loginIn } from "../api/auth";
import {loadUserFromStorage} from "../redux/slices/authSlice.js"
const LoginModal: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
    const [message,setMessage]=useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
          const dispatch = useDispatch();
    
    const isOpen = useSelector((state:any) => state.modal.isLoginOpen);
    if(!isOpen) return null

    const handleSubmit =async(e: React.FormEvent<HTMLFormElement>)=>{
              e.preventDefault()
           try{
               const submit = await loginIn({username:username,password:password})
               setMessage(submit.message)
               localStorage.setItem("token",submit.token)
               localStorage.setItem("user",JSON.stringify(submit.user))
               console.log("submit",submit)
               if(submit.message==="login sucessfull"){
                dispatch(loadUserFromStorage())
                setTimeout(()=>{
                  dispatch(closeLogin())
                },1000)
    
               }
    
           
           
              }catch(err){
            console.log("error in ui sign up",err)
    
           }
    
        }
    
    
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-[420px] rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Log In</h2>
          <button
            onClick={()=>dispatch(closeLogin())}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          By continuing, you agree to our User Agreement and acknowledge that you
          understand the Privacy Policy.
        </p>

        <form className="space-y-4" onSubmit={(e)=>handleSubmit(e)}>
          <label className="block">
            <span className="text-sm text-gray-700">Username</span>
            <input
              type="text"
              name="username"
              value={username}
              className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
              placeholder="your username"
              onChange={(e) => setUsername(e.target.value)}
              // UI-only: no handlers
            />
          </label>

          <label className="block">
            <span className="text-sm text-gray-700">Password</span>
            <input
              type="password"
              name="password"
              value={password}
              className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
              placeholder="••••••••"
               onChange={(e) => setPassword(e.target.value)}
            />
          </label>
                    <p className="text-blue-400 ">{message}</p>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-orange-600 text-white font-medium hover:bg-orange-700"
          >
            Log in
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 " onClick={()=>dispatch(openSignup())}>
          New here? <span className="text-blue-600 cursor-pointer">Create an account</span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
