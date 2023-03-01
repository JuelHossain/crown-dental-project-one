/* eslint-disable no-plusplus */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  getReviewsArg: {},
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setGetReviewsArg: (state, { payload }) => {
      state.getReviewsArg = payload;
    },
  },
});

export const { setGetReviewsArg } = reviewsSlice.actions;
export default reviewsSlice.reducer;
