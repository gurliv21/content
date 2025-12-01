import React, { useEffect } from 'react'
import Dashboard from './screens/Dashboard'
import ScreenWrapper from './screens/ScreenWrapper'
import LoginModal from './components/LoginModal'
import SignUpModal from './components/SignUpModal'
import { useSelector, useDispatch } from "react-redux";
// import { closeModal } from "../redux/modalSlice";
import {loadUserFromStorage} from "./redux/slices/authSlice.js"
import Index from './routes/index.tsx'
function App() {
    const dispatch =useDispatch()
    const isLogged =useSelector((state:any)=>state.auth.isLoggedIn)

    const token= localStorage.getItem("token")
  useEffect(() => {
    console.log("Running loadUserFromStorage...");
    dispatch(loadUserFromStorage());
  }, []); 

  useEffect(() => {
    console.log("Redux login status updated:", isLogged);
  }, [isLogged]); 

  return(
  <React.Fragment>
  <Index/>
  <LoginModal/>
  <SignUpModal/>
  </React.Fragment> 
)}

export default App
