const deleteReview = {
  query: (id) => ({
    url: `/reviews/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, id) => [{ type: "review", id }],
  onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {},
};
export default deleteReview;
