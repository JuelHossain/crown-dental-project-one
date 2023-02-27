/* eslint-disable import/no-cycle */
import apiSlice from "../api/apiSlice";
import addReview from "./helper/addReview";
import deleteReview from "./helper/deleteReview";
import getReview from "./helper/getReview";
import getReviews from "./helper/getReviews";
import modifyReview from "./helper/modifyReview";

export const reviewsApi = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    addReview: mutation(addReview),
    getReview: query(getReview),
    getReviews: query(getReviews),
    modifyReview: mutation(modifyReview),
    deleteReview: mutation(deleteReview),
  }),
});

export const {
  useAddReviewMutation,
  useGetReviewQuery,
  useGetReviewsQuery,
  useDeleteReviewMutation,
  useModifyReviewMutation,
} = reviewsApi;
