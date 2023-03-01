/* eslint-disable no-plusplus */
import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const initialState = {
  accessToken: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, { payload }) => {
      localStorage.setItem("accessToken", payload.accessToken);
      localStorage.setItem("user", JSON.stringify(payload.user));
      state.accessToken = payload.accessToken;
      state.user = payload.user;
    },
    userLoggedOut: (state) => {
      signOut(auth);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
