/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { showNotification } from "@mantine/notifications";
import { servicesApi } from "../servicesApi";

const deleteService = {
  query: (id) => ({
    url: `/services/${id}`,
    method: "DELETE",
  }),
  onQueryStarted: async (id, { getState, dispatch, queryFulfilled }) => {
    // getting getServices endpoint arguments from the store.
    const { pagination } = getState().services || {};

    // optimistic update
    const patchResult = dispatch(
      servicesApi.util.updateQueryData("getServices", pagination, (draft) => {
        // console.log("current(draft) :>> ", current(draft));
        draft.filter(
          (service) =>
            // console.log(service);
            service._id.toString() !== id.toString(),
        );
      }),
    );

    try {
      await queryFulfilled;
      // handling query success
      showNotification({ title: `Service has been deleted successfully` });
    } catch (err) {
      // handling error
      showNotification({ title: `Theres an error while deleting a service` });
      patchResult.undo();
      console.log(err);
    }
  },
};
export default deleteService;
