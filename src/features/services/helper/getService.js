const getService = {
  query: (id) => ({ url: `/services/${id}` }),
  provideTags: (result, error, id) => [{ type: "service", id }],
  onQueryStarted: async (id, { queryFulfilled }) => {
    try {
      await queryFulfilled;
    } catch (err) {
      console.log(err);
    }
  },
};
export default getService;
