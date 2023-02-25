/* eslint-disable no-plusplus */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serviceId: "",
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServiceId: (state, { payload }) => {
      state.serviceId = payload;
    },
  },
});

export const { setServiceId } = servicesSlice.actions;
export default servicesSlice.reducer;
