const query = (email) => (email ? `?email=${email}` : "");

const getReview = {
  query: ({ id, email }) => ({ url: `/reviews/${id}${query(email)}` }),
  provideTags: (result, error, { id, email }) => [{ type: "review", id, email }, "review"],
  onQueryStarted: ({ id }, { dispatch, queryFulfilled }) => {
    try {
      console.log(id);
    } catch {
      // nothing
    }
  },
};
export default getReview;
