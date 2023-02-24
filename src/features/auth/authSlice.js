/* eslint-disable no-plusplus */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  user: {},
  inputs: ["email", "name", "password"],
  activeInput: "email",
  emailStatus: "dk",
  form: {},
  timer: 30,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      localStorage.clear();
      state.accessToken = undefined;
      state.user = undefined;
    },
    setActiveInput: (state, action) => {
      state.activeInput = action.payload;
    },
    setEmailStatus: (state, action) => {
      state.emailStatus = action.payload;
    },
    setForm: (state, action) => {
      state.form.assign(action.payload);
    },
    controlTimer: (state, action) => {
      if (action.payload === "on") {
        for (let i = state.timer; i >= 0; i--) {
          state.timer = i;
        }
        if (state.timer === 0) {
          state.timer = 30;
        }
      } else {
        state.timer = 30;
      }
    },
  },
});

export const { userLoggedIn, userLoggedOut, setActiveInput, setEmailStatus, setForm, controlTimer } = authSlice.actions;
export default authSlice.reducer;
