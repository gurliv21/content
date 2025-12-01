import React from 'react'
import { Routes, Route } from "react-router-dom";
import ScreenWrapper from '../screens/ScreenWrapper';
import CreatePost from '../components/CreatePost';
import Dashboard from '../screens/Dashboard';
function index() {
  return (
    <Routes>
        <Route path='/' element={<ScreenWrapper/>}>
            <Route index element={<Dashboard/>}/>
        <Route path='/create-post' element={<CreatePost/>}/>
          </Route>


    </Routes>
  )
}

export default index
