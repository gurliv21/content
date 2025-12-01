import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Dashboard from './Dashboard'
import CreatePost from '../components/CreatePost'
import { Outlet } from 'react-router-dom'
function ScreenWrapper() {
  return (
    <main className=''>
        <NavBar/>
        <section className='flex'>
            <SideBar/>
            <Outlet/>
        </section>

        
        
    </main>
  )
}

export default ScreenWrapper
