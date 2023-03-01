/* eslint-disable no-unused-vars */

import { setGetReviewsArg } from "../reviewsSlice";

// login to make query request depending on the arguments.

const queryOp = ({ serviceId, email } = {}) => {
  let query = "";
  if (serviceId && email) {
    query = `?serviceId=${serviceId}&email=${email}`;
  } else if (email) {
    query = `?email=${email}`;
  } else if (serviceId) {
    query = `?serviceId=${serviceId}`;
  }
  return query;
};

const getReviews = {
  // query function
  query: (arg) => ({ url: `/reviews${queryOp(arg)}` }),
  // providing tags to keep track of the query
  providesTags: (result, error, arg) => [{ type: "reviews", ...arg }, "reviews"],
  // handling success and errors
  onQueryStarted: (arg, { dispatch, queryFulfilled }) => {
    dispatch(setGetReviewsArg(arg));
  },
};
export default getReviews;
