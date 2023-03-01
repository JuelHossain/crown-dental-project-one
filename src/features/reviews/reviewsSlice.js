/* eslint-disable no-plusplus */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arg: {},
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setArg: (state, { payload }) => {
      Object.assign(state.arg, payload);
    },
  },
});

export const { setArg } = reviewsSlice.actions;
export default reviewsSlice.reducer;
