/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
import { closeAllModals } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import { reviewsApi } from "../reviewsApi";

const modifyReview = {
  query: ({ id, ...patch }) => ({
    url: `/reviews/${id}`,
    method: "PATCH",
    body: patch,
  }),
  // invalidatesTags: ["review"],
  onQueryStarted: async ({ id, ...patch }, { dispatch, queryFulfilled }) => {
    // optimistic update
    const patchResult = dispatch(
      reviewsApi.util.updateQueryData("getReview", id, (draft) => {
        Object.assign(draft, patch);
      }),
    );
    try {
      await queryFulfilled;
      // success handling
      showNotification({ title: `Review has been modified successfully` });
      closeAllModals();
    } catch (err) {
      console.log(err);
      patchResult.undo();
      // error handling here.
      showNotification({ title: `There was a problem modifying a Review` });
    }
  },
};
export default modifyReview;
