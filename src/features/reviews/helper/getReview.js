const query = (email) => (email ? `?email=${email}` : "");

const getReview = {
  query: ({ id, email }) => ({ url: `/reviews/${id}${query(email)}` }),
  provideTags: (result, error, { id, email }) => [{ type: "review", id, email }],
  onQueryStarted: (id, { dispatch, queryFulfilled }) => {},
};
export default getReview;
