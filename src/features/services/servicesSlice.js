/* eslint-disable no-plusplus */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
});

// export const {} = servicesSlice.actions;
export default servicesSlice.reducer;
