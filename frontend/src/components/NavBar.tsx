import React, { useState } from 'react'
import { FiPlusSquare } from "react-icons/fi";
import Button from './Button';
import LoginModal from './LoginModal';
import { useDispatch,useSelector } from "react-redux";
import { openLogin, openSignup } from '../redux/slices/modalSlice.js'
import {logout} from "../redux/slices/authSlice.js"
import img1 from '../assets/cat.png'
import { useNavigate } from "react-router-dom";
function NavBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
    const isLogged =useSelector((state:any)=>state.auth.isLoggedIn)
    const user = useSelector((state:any)=>state.auth.user)
    const [postcomponent,setPostcomponent]=useState<Boolean>(false)

  const logout1=()=>{
    localStorage.clear();
    console.log("log in nav",isLogged)
    dispatch(logout())
    console.log()
    console.log()
    console.log()
    console.log("log in nav",isLogged)

  }

  const createPost =()=>{
    if(!isLogged){
       setPostcomponent(true)
       console.log("hello here")
    }
    else{
      console.log("i am here")
      navigate("create-post")
    }
  }
  return (
    <div className='border-b border-2 px-3 py-2 shadow-sm flex justify-between'>
        <p className='text-orange-600 font-bold text-3xl'>Spott</p>
        <div className='shadow-sm shadow-orange-400  border-2 inline-flex border-orange-500 rounded-full px-12 my-auto  py-2 font-bold text-slate-700 cursor-pointer gap-4 ' onClick={()=>createPost()}>
                        <FiPlusSquare className='font-bold my-auto text-orange-700 text-2xl' />
            Create Post 

        </div>
        {isLogged ?
        <div className='flex gap-2 my-auto'>
          <img src={img1} className='h-[30px] w-auto my-auto'/>
          <p className='my-auto font-bold'>{user.username}</p>
         <Button variant='primary' onClick={()=>logout1()}>Log out</Button>

          </div>:
                  <div className="">
            <Button variant='primary' className='mr-2' onClick={()=>dispatch(openSignup())}>Sign Up</Button>
            <Button onClick={()=>dispatch(openLogin())}>Log In</Button>
            
        </div>}

      
    </div>
  )
}

export default NavBar
