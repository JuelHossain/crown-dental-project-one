const addReview = {
  query: (data) => ({
    url: "/reviews",
    method: "POST",
    body: data,
  }),
  onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {},
};
export default addReview;
