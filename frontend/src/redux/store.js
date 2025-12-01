import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice.js";
import authReducer from "./slices/authSlice.js";
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
  },
});
