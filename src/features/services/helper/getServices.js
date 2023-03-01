import { setPagination } from "../servicesSlice";

const query = (page, size) => (page || size ? `?page=${page}&size=${size}` : "");

const getServices = {
  query: ({ page, size }) => ({ url: `/services${query(page, size)}` }),
  onQueryStarted: (arg, { dispatch }) => {
    dispatch(setPagination(arg));
  },
  // Refetch when the page arg changes
  forceRefetch({ currentArg, previousArg }) {
    return currentArg !== previousArg;
  },
};
export default getServices;
