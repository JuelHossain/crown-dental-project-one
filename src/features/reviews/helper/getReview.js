const getReview = {
  // query fn
  query: (id) => ({ url: `/reviews/${id}` }),
  // providing tags to keep track of the query
  provideTags: (result, error, id) => [{ type: "review", id }, "review"],
  // handling success and errors
  onQueryStarted: async (arg, { queryFulfilled }) => {
    try {
      await queryFulfilled;
      // success handling
    } catch (error) {
      // error handling
      console.log(error);
    }
  },
};
export default getReview;
