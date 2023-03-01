/* eslint-disable import/no-cycle */
import apiSlice from "../api/apiSlice";
import addReview from "./helper/addReview";
import deleteReview from "./helper/deleteReview";
import { getReview, getUserReviewOnService } from "./helper/getReview";
import { getReviews, getServiceReviews, getUserReviews } from "./helper/getReviews";
import modifyReview from "./helper/modifyReview";

export const reviewsApi = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    addReview: mutation(addReview),
    getReview: query(getReview),
    getUserReviewOnService: query(getUserReviewOnService),
    getReviews: query(getReviews),
    getUserReviews: query(getUserReviews),
    getServiceReviews: query(getServiceReviews),
    modifyReview: mutation(modifyReview),
    deleteReview: mutation(deleteReview),
  }),
});

export const {
  useAddReviewMutation,
  useGetReviewQuery,
  useGetUserReviewOnServiceQuery,
  useGetReviewsQuery,
  useGetServiceReviewsQuery,
  useGetUserReviewsQuery,
  useDeleteReviewMutation,
  useModifyReviewMutation,
} = reviewsApi;
