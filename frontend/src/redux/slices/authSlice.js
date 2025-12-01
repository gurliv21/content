import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: null,
    user: null,
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    //   state.token = action.payload.token;
    //   state.user = action.payload.user;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
    },
    loadUserFromStorage(state) {
      const token = localStorage.getItem("token");
      const user = JSON.parse((localStorage.getItem("user") || "null"));

      if (token) {
        state.isLoggedIn = true;
        state.token = token;
        state.user = user;
      }
    },
  },
});

export const { login, logout, loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;
