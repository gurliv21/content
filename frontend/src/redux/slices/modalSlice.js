import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isLoginOpen: false,
    isSignupOpen: false,
  },
  reducers: {
    openLogin: (state) => {
      state.isLoginOpen = true;
      state.isSignupOpen = false; 
    },
    closeLogin: (state) => {
      state.isLoginOpen = false;
    },
    openSignup: (state) => {
      state.isSignupOpen = true;
      state.isLoginOpen = false; 
    },
    closeSignup: (state) => {
      state.isSignupOpen = false;
    },
  },
});

export const {
  openLogin,
  closeLogin,
  openSignup,
  closeSignup,
  userLoggedIn
} = modalSlice.actions;

export default modalSlice.reducer;
