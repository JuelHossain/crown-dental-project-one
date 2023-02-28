/* eslint-disable import/no-cycle */
import { closeAllModals } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import { servicesApi } from "../servicesApi";

const modifyService = {
  query: ({ id, ...patch }) => ({
    url: `/services/${id}`,
    method: "PATCH",
    body: patch,
  }),
  // handling errors and success after or before the api response.
  onQueryStarted: async ({ id, ...patch }, { dispatch, queryFulfilled }) => {
    // optimistic update to cache of the data.
    const patchResult = dispatch(
      servicesApi.util.updateQueryData("getService", id, (draft) => {
        Object.assign(draft, patch);
      }),
    );
    try {
      await queryFulfilled;
      // success handling
      showNotification({ title: `Service has been Modified successfully` });
      closeAllModals();
    } catch (err) {
      // error handling here.
      showNotification({ title: `There was a problem modifying a service` });
      patchResult.undo();
    }
  },
};
export default modifyService;
