/* eslint-disable import/no-cycle */
import { showNotification } from "@mantine/notifications";
import { reviewsApi } from "../reviewsApi";

const addReview = {
  query: (data) => ({
    url: "/reviews",
    method: "POST",
    body: data,
  }),
  // invalidating tags to refetch the reviews
  // invalidatesTag: ["reviews"],
  // handling success and errors
  onQueryStarted: async (data, { getState, queryFulfilled, dispatch }) => {
    try {
      // getting the updated data from the server in that case i am expecting a inserted id to be returned from the server after successfully added the data to the mongodb
      const { data: { insertedId } = {} } = (await queryFulfilled) ?? {};

      // getting the page and size from the store
      const { serviceId } = getState()?.services || {};
      const { email } = getState()?.auth?.user || {};
      // pessimistic update.

      dispatch(
        reviewsApi.util.updateQueryData("getReviews", { serviceId, email }, (draft) => {
          // console.log("current(draft) :>> ", current(draft));
          draft.unshift({ ...data, _id: insertedId });
        }),
      );
      // success handling
      showNotification({ title: `Review has been added successfully` });
    } catch (err) {
      // error handling here.
      showNotification({ title: `There was a problem adding a review` });
      console.log(err);
    }
  },
};
export default addReview;
