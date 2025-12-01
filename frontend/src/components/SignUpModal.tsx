import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeSignup} from "../redux/slices/modalSlice";
import {signup} from "../api/auth.js"
import {loadUserFromStorage} from "../redux/slices/authSlice.js"
const SignUpModal: React.FC = () => {
        const dispatch = useDispatch();
        const isOpen = useSelector((state:any) => state.modal.isSignupOpen);
  const [message,setMessage]=useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

    const handleSubmit =async(e: React.FormEvent<HTMLFormElement>)=>{
          e.preventDefault()
          if(password !== confirmpassword){
            setMessage("password does not match")
            return
          }
       try{
           const submit = await signup({username:username,password:password})
           setMessage(submit.message)
           localStorage.setItem("token",submit.token)
           localStorage.setItem("user",JSON.stringify(submit.user))
           console.log("submit",submit)
           if(submit.message==="sign up sucessful"){
               dispatch(loadUserFromStorage())
            setTimeout(()=>{
              dispatch(closeSignup())
            },1000)

           }

       
       
          }catch(err){
        console.log("error in ui sign up",err)

       }

    }



      if(!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-[420px] rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">SIGN UP</h2>
          <button
            onClick={() => dispatch(closeSignup())}
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
          <label className="block">
            <span className="text-sm text-gray-700">Confirm Password</span>
            <input
              type="password"
              name="confirmpassword"
              value={confirmpassword}
              className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
              placeholder="••••••••"
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </label>
          <p className="text-blue-400 ">{message}</p>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-orange-600 text-white font-medium hover:bg-orange-700"
          >
            Sign Up
          </button>
        </form>

      </div>
    </div>
  );
};

export default SignUpModal;
