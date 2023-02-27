const addReview = {
  query: (data) => ({
    url: "/reviews",
    method: "POST",
    body: data,
  }),
  invalidatesTag: ["review"],
  onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {},
};
export default addReview;
