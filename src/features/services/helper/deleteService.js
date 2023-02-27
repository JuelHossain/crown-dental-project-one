/* eslint-disable no-underscore-dangle */
import { showNotification } from "@mantine/notifications";
import { servicesApi } from "../servicesApi";

const deleteService = {
  query: (id) => ({
    url: `/services/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: ["service", "services"],
  onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
    const patchResult = dispatch(
      servicesApi.util.updateQueryData("getServices", id, (draft) => {
        console.log('here is me')
        draft.filter((service) => {
          console.log(service);
          return service._id.toString() !== id.toString();
        });
      }),
    );
    try {
      await queryFulfilled;
      showNotification({ title: `Service has been deleted successfully` });
    } catch (err) {
      patchResult.undo();
      console.log(err);
      showNotification({ title: `Theres an error while deleting a service` });
    }
  },
};
export default deleteService;
