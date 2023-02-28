/* eslint-disable import/no-cycle */
/* eslint-disable no-underscore-dangle */
import { reviewsApi } from "../reviewsApi";

const deleteReview = {
  query: (id) => ({
    url: `/reviews/${id}`,
    method: "DELETE",
  }),
  // invalidating tags to refetch the query after deleting data data from the server.
  // invalidatesTags: ["reviews"],
  // handling success and errors.
  onQueryStarted: async (id, { dispatch, queryFulfilled, getState }) => {
    const { serviceId } = getState().services || {};
    const { email } = getState().auth?.user || {};
    const patchResult = dispatch(
      // optimistic cache update after deleting the data from the server.
      reviewsApi.util.updateQueryData("getReviews", { serviceId, email }, (draft) =>
        draft.filter((review) => review._id.toString() !== id.toString()),
      ),
    );

    try {
      await queryFulfilled;
      // success handling
    } catch (err) {
      // error handling
      patchResult.undo();
    }
  },
};
export default deleteReview;
