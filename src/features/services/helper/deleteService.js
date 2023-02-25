const deleteService = {
  query: (id) => ({
    url: `/services/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, id) => [{ type: "service", id }],
  onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {},
};
export default deleteService;
