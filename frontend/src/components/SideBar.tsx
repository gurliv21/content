import React from 'react'
import { IoIosHome } from "react-icons/io";
import { TbCancel } from "react-icons/tb";
import { MdSpaceDashboard } from "react-icons/md";
interface SideLinkProps{
    icon:React.ReactNode,
    text:String,
    href?:String,

}

export const SideLink=({icon,text,href="/"}:SideLinkProps)=>{
     return(
        <div className='flex p-2 bg-gray-100 items-center  gap-2 text-bold rounded-md mx-3'  >
          <span className='text-2xl'>{icon}</span>
          <p className='text-md font-semibold' >{text}</p>

        </div>
     )
}

function SideBar() {
  return (
    <div className='w-[200px] border-r h-screen pt-4 flex gap-2 flex-col' >
      <SideLink text="Home" icon={<IoIosHome />}/>
      <SideLink text="dashboard" icon={<MdSpaceDashboard />}/>
      <SideLink text="violation" icon={<TbCancel />}/>
        
      
    </div>
  )
}

export default SideBar
