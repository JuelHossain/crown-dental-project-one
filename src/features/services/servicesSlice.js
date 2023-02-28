/* eslint-disable no-plusplus */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serviceId: undefined,
  pagination: {},
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServiceId: (state, { payload }) => {
      state.serviceId = payload;
    },
    setPagination: (state, { payload }) => {
      state.pagination = payload;
    },
  },
});

export const { setServiceId, setPagination } = servicesSlice.actions;
export default servicesSlice.reducer;
