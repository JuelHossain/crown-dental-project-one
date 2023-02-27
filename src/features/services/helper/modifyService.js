import { closeAllModals } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import { servicesApi } from "../servicesApi";

const modifyService = {
  query: ({ id, ...patch }) => ({
    url: `/services/${id}`,
    method: "PATCH",
    body: patch,
  }),
  invalidatesTags: (result, error, { id }) => [{ type: "service", id }, "service"],
  onQueryStarted: async ({ id, ...patch }, { dispatch, queryFulfilled }) => {
    const patchResult = dispatch(
      servicesApi.util.updateQueryData("getService", id, (draft) => {
        Object.assign(draft, patch);
      }),
    );
    try {
      await queryFulfilled;
      closeAllModals();

      // success handling
      showNotification({ title: `Service has been Modified successfully` });
    } catch (err) {
      patchResult.undo();
      // error handling here.
      showNotification({ title: `There was a problem modifying a service` });
    }
  },
};
export default modifyService;
