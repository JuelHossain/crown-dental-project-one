const deleteService = {
  query: (id) => ({
    url: `/services/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, id) => [{ type: "service", id }],
  onQueryStarted: async (arg, { queryFulfilled }) => {
    try {
      await queryFulfilled();
      // success
 
    } catch (err) {
      // error
    }
  },
};
export default deleteService;
