import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  user: {},
  inputs: ["email", "name", "password"],
  activeInput: "email",
  emailStatus: "",
  form: {},
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
  },
});

export const { userLoggedIn, userLoggedOut, setActiveInput, setEmailStatus, setForm } = authSlice.actions;
export default authSlice.reducer;
