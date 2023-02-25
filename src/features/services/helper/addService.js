import { showNotification } from "@mantine/notifications";

const addService = {
  query: (data) => ({
    url: "/services",
    method: "POST",
    body: data,
  }),
  invalidatesTags: [{ type: "services" }],
  onQueryStarted: async (arg, { queryFulfilled }) => {
    try {
      await queryFulfilled();
      // success handling
      showNotification({ title: `Service has been added successfully` });
    } catch (err) {
      // error handling here.
      showNotification({ title: `There was a problem adding a service` });
    }
  },
};
export default addService;
