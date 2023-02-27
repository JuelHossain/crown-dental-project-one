const query = (email) => (email ? `?email=${email}` : "");

const getReview = {
  query: ({ id, email }) => ({ url: `/reviews/${id}${query(email)}` }),
  provideTags: (result, error, { id, email }) => [{ type: "review", id, email }, "review"],
  onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
    try {
      await queryFulfilled;
    } catch {
      // nothing
    }
  },
};
export default getReview;
