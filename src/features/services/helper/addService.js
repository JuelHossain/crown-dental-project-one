const addService = {
  query: (data) => ({
    url: "/services",
    method: "POST",
    body: data,
  }),
  onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {},
};
export default addService;
