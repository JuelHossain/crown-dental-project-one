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
      await queryFulfilled();
      // success handling
      showNotification({ title: `Review has been added successfully` });
    } catch (err) {
      // error handling here.
      showNotification({ title: `There was a problem adding a Review` });
    }
  },
};
export default modifyReview;
