const query = (page, size) => (page || size ? `?page=${page}&size=${size}` : "");

const getServices = {
  query: ({ page, size }) => ({ url: `/services${query(page, size)}` }),
  provideTags: (result, error, { page, size }) => [{ type: "services", page, size }],
  onQueryStarted: ({ page, size }, { dispatch, queryFulfilled }) => {},
};
export default getServices;
