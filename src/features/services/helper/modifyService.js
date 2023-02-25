const modifyService = {
  query: ({ id, ...patch }) => ({
    url: `/services/${id}`,
    method: "PATCH",
    body: patch,
  }),
  invalidatesTags: (result, error, { id }) => [{ type: "service", id }],
  onQueryStarted: async ({ id, ...patch }, { queryFulfilled, dispatch }) => {},
};
export default modifyService;
