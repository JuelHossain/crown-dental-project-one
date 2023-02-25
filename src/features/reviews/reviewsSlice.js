/* eslint-disable no-plusplus */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
});

// export const {} = reviewsSlice.actions;
export default reviewsSlice.reducer;
