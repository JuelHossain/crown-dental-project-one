import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../../utils/default";

import { userLoggedOut } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: url,
  prepareHeaders: async (headers, { getState }) => {
    const token = getState()?.auth?.accessToken;
    // console.log("🚀 ~ file: apiSlice.js:10 ~ prepareHeaders: ~ token:", token)

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
      api.dispatch(userLoggedOut());
    }
    return result;
  },
  tagTypes: ["service", "services", "review", "reviews"],
  endpoints: () => ({}),
});

export default apiSlice;
