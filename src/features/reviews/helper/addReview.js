const addReview = {
  query: (data) => ({
    url: "/Reviews",
    method: "POST",
    body: data,
  }),
  onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {},
};
export default addReview;
