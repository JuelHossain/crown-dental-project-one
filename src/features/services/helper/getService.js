const getService = {
  query: (id) => ({ url: `/services/${id}` }),
  // providing tags to keep track of the query
  provideTags: (result, error, id) => [{ type: "service", id }, "service"],
  // success and error handling.
  onQueryStarted: async (id, { queryFulfilled }) => {
    try {
      await queryFulfilled;
    } catch (err) {
      console.log(err);
    }
  },
};
export default getService;
