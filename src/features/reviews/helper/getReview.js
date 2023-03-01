export const getReview = {
  query: (id) => ({ url: `/reviews/${id}` }),
};

export const getUserReviewOnService = {
  query: ({ serviceId, email }) => ({ url: `/reviews/${serviceId}?${email}` }),
};
