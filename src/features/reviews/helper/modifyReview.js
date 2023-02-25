const modifyReview = {
  query: ({ id, ...patch }) => ({
    url: `/reviews/${id}`,
    method: "PATCH",
    body: patch,
  }),
  invalidatesTags: (result, error, { id }) => [{ type: "review", id }],
  onQueryStarted: async ({ id, ...patch }, { queryFulfilled, dispatch }) => {},
};
export default modifyReview;
