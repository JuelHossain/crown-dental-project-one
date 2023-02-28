/* eslint-disable import/no-cycle */
/* eslint-disable no-underscore-dangle */
import { reviewsApi } from "../reviewsApi";

const deleteReview = {
  query: (id) => ({
    url: `/reviews/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: ["review"],
  onQueryStarted: async (id, { dispatch, queryFulfilled, getState }) => {
    const patchResult = dispatch(
      reviewsApi.util.updateQueryData("getReviews", id, (draft) =>
      draft.filter((review) => review._id.toString() !== id.toString()),
      ),
  );
    const { serviceId } = getState().services || {};
    const { email } = getState().auth.user || {};
    const patchResult2 = dispatch(
      reviewsApi.util.updateQueryData("getReviews", serviceId, (draft) =>
      draft.filter((review) => review.serviceId.toString() !== serviceId.toString()),
      ),
    );
    const patchResult3 = dispatch(
      reviewsApi.util.updateQueryData("getReviews", email, (draft) =>
        draft.filter((review) => review.ratingBy.toString() !== email),
      ),
    );
    try {
      await queryFulfilled;
      // success
    } catch (err) {
      // error
      patchResult.undo();
      patchResult2.undo();
      patchResult3.undo();
    }
  },
};
export default deleteReview;
