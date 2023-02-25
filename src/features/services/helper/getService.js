const getService = {
  query: (id) => ({ url: `/services/${id}` }),
  provideTags: (result, error, id) => [{ type: "service", id }],
  onQueryStarted: (id, { dispatch, queryFulfilled }) => {},
};
export default getService;
