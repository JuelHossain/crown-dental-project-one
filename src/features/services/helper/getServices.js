import { setPagination } from "../servicesSlice";

const query = (page, size) => (page || size ? `?page=${page}&size=${size}` : "");

const getServices = {
  query: ({ page, size }) => ({ url: `/services${query(page, size)}` }),
  // providing tags to keep track of the query.
  provideTags: (result, error, { id, email }) => [{ type: "services", id, email }, "services"],
  // always dispatch the argument to store;
  onQueryStarted: (arg, { dispatch }) => {
    dispatch(setPagination(arg));
  },
  // Refetch when the page arg changes
  forceRefetch({ currentArg, previousArg }) {
    return currentArg !== previousArg;
  },
};
export default getServices;
