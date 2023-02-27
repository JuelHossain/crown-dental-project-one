import { showNotification } from "@mantine/notifications";

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
      console.log(insertedId);
      // dispatch(
      //   servicesApi.util.updateQueryData("getServices", undefined, (draft) => draft.push({ ...data, _id: insertedId })),
      // );
      // success handling
      showNotification({ title: `Service has been added successfully` });
    } catch (err) {
      console.log(err);
      // error handling here.
      showNotification({ title: `There was a problem adding a service` });
    }
  },
};
export default addService;
