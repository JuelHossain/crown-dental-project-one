import apiSlice from "../api/apiSlice";
import { userLoggedIn, userLoggedOut } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: ({ mutation }) => ({
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
  }),
});

export const { useGenerateTokenMutation } = authApi;
