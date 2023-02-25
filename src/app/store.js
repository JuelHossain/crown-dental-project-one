import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import reviewsSlice from "../features/reviews/reviewsSlice";
import servicesSlice from "../features/services/servicesSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    services: servicesSlice,
    reviews: reviewsSlice,
  },
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({ serializableCheck: false }).concat(apiSlice.middleware),
});

export default store;
