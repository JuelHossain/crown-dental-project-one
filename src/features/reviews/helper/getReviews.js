

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
  query: (arg) => ({ url: `/reviews${queryOp(arg)}` }),
  providesTags: (result, error, arg) =>
    result
      ? [...result.map(({ _id, serviceId, ratingBy }) => ({ type: "review", id: _id, serviceId, ratingBy })), "review"]
      : ["review"],
  onQueryStarted: (id, { dispatch, queryFulfilled }) => {},
};
export default getReviews;
