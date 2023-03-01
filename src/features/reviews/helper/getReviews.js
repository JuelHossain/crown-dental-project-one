/* eslint-disable no-unused-vars */

import { setArg } from "../reviewsSlice";

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

export const getReviews = {
  query: (arg, b) => {
    console.log("🚀 ~ file: getReviews.js:19 ~ b:", b);
    console.log("b :>> ", b);
    return {
      url: `/reviews`,
    };
  },
};

export const getUserReviews = {
  query: (email) => ({ url: `/reviews?email=${email}` }),
};

export const getServiceReviews = {
  query: (serviceId) => ({ url: `/reviews?serviceId=${serviceId}` }),
  onQueryStarted: async (serviceId, { dispatch, queryFulfilled }) => {
    dispatch(setArg({ serviceId }));
  },
};
