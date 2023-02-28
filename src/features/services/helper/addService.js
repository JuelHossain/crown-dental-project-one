/* eslint-disable import/no-cycle */
import { showNotification } from "@mantine/notifications";
import { servicesApi } from "../servicesApi";

const addService = {
  query: (data) => ({
    url: "/services",
    method: "POST",
    body: data,
  }),
  onQueryStarted: async (data, { getState, dispatch, queryFulfilled }) => {
    try {
      // getting the updated data from the server in that case i am expecting a inserted id to be returned from the server after successfully added the data to the mongodb
      const { data: { insertedId } = {} } = (await queryFulfilled) ?? {};

      // getting the page and size from the store
      const { pagination } = getState()?.services || {};

      // pessimistic update.

      dispatch(
        servicesApi.util.updateQueryData("getServices", pagination, (draft) => {
          // console.log("current(draft) :>> ", current(draft));
          draft.unshift({ ...data, _id: insertedId });
        }),
      );
      // success handling
      showNotification({ title: `Service has been added successfully` });
    } catch (err) {
      // error handling here.
      showNotification({ title: `There was a problem adding a service` });
      console.log(err);
    }
  },
};
export default addService;
