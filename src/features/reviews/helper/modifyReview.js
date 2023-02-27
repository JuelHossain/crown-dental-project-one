import { showNotification } from "@mantine/notifications";

const modifyReview = {
  query: ({ id, ...patch }) => ({
    url: `/reviews/${id}`,
    method: "PATCH",
    body: patch,
  }),
  invalidatesTags: (result, error, { id }) => [{ type: "review", id }],
  onQueryStarted: async ({ id, ...patch }, { queryFulfilled }) => {
    try {
      await queryFulfilled;
      // success handling
      showNotification({ title: `Review has been modified successfully` });
    } catch (err) {
      console.log(err);
      // error handling here.
      showNotification({ title: `There was a problem modifying a Review` });
    }
  },
};
export default modifyReview;
