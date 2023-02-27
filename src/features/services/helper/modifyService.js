import { closeAllModals } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";

const modifyService = {
  query: ({ id, ...patch }) => ({
    url: `/services/${id}`,
    method: "PATCH",
    body: patch,
  }),
  invalidatesTags: (result, error, { id }) => [{ type: "service", id }],
  onQueryStarted: async ({ id, ...patch }, { queryFulfilled }) => {
    try {
      await queryFulfilled;
      closeAllModals();

      // success handling
      showNotification({ title: `Service has been Modified successfully` });
    } catch (err) {
      console.log(err);
      // error handling here.
      showNotification({ title: `There was a problem modifying a service` });
    }
  },
};
export default modifyService;
