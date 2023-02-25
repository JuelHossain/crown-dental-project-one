const getService = {
  query: (id) => ({ url: `/services/${id}` }),
  provideTags: (result, error, id) => [{ type: "service", id }],
  onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
    try {
      const data = await queryFulfilled;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  },
};
export default getService;
