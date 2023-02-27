const addReview = {
  query: (data) => ({
    url: "/reviews",
    method: "POST",
    body: data,
  }),
  invalidatesTag: ["reviews"],
  onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {},
};
export default addReview;
