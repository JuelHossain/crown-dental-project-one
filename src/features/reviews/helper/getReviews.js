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

const getReview = {
  query: (arg) => ({ url: `/reviews${queryOp(arg)}` }),
  provideTags: (result, error, { serviceId, email }) => [{ type: "reviews", serviceId, email }],
  onQueryStarted: (id, { dispatch, queryFulfilled }) => {},
};
export default getReview;
