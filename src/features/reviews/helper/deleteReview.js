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
    // getting the page and size from the store
    const { serviceId } = getState()?.reviews?.arg || {};
    const { email } = getState()?.auth?.user || {};

    const patchResult = dispatch(
      // optimistic cache update after deleting the data from the server.
      reviewsApi.util.updateQueryData("getReviews", {}, (draft) =>
        draft.filter((review) => review?._id.toString() !== id.toString()),
      ),
    );

    const patchResult2 = dispatch(
      // optimistic cache update after deleting the data from the server.
      reviewsApi.util.updateQueryData("getUserReviews", email, (draft) =>
        draft.filter((review) => review?._id.toString() !== id.toString()),
      ),
    );
    const patchResult3 = dispatch(
      // optimistic cache update after deleting the data from the server.
      reviewsApi.util.updateQueryData("getServiceReviews", serviceId, (draft) =>
        draft.filter((review) => review?._id.toString() !== id.toString()),
      ),
    );

    try {
      await queryFulfilled;
      // success handling
    } catch (err) {
      // error handling
      patchResult.undo();
      patchResult2.undo();
      patchResult3.undo();
    }
  },
};
export default deleteReview;
