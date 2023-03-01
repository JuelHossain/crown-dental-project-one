import apiSlice from "../api/apiSlice";
import { userLoggedIn, userLoggedOut } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: ({ mutation, query }) => ({
    generateToken: mutation({
      query: (data) => ({
        url: "/users",
        method: "PUT",
        body: data,
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(userLoggedIn({ accessToken: data?.accessToken, user: arg }));
        } catch (err) {
          dispatch(userLoggedOut());
        }
      },
    }),
    getUser: query({
      query: (email) => ({
        url: `/users/${email}`,
      }),
      onQueryStarted: async (arg, { getState, dispatch, queryFulfilled }) => {
        const { accessToken } = getState()?.auth || {};
        if(accessToken)
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (err) {
          dispatch(userLoggedOut());
        }
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGenerateTokenMutation, useGetUserQuery } = authApi;
