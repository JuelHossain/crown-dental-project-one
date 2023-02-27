/* eslint-disable import/no-cycle */
import { showNotification } from "@mantine/notifications";
import { current } from "@reduxjs/toolkit";
import { servicesApi } from "../servicesApi";

const addService = {
  query: (data) => ({
    url: "/services",
    method: "POST",
    body: data,
  }),
  invalidatesTags: ["service", "services"],
  onQueryStarted: async (data, { dispatch, queryFulfilled }) => {
    try {
      const { data: { insertedId } = {} } = (await queryFulfilled) ?? {};
      console.log(insertedId); // this is logged
      dispatch(
        servicesApi.util.updateQueryData("getServices", "", (draft) => {
          console.log(current(draft)); // cannot get this
          console.log("hello there what is the problem?"); // cannot get this as well
          draft.push({ ...data, _id: insertedId });
        }),
      );
      // success handling
      showNotification({ title: `Service has been added successfully` });
    } catch (err) {
      // error handling here.
      console.log(err);
      showNotification({ title: `There was a problem adding a service` });
    }
  },
};
export default addService;
