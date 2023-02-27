const query = (page, size) => (page || size ? `?page=${page}&size=${size}` : "");

const getServices = {
  query: ({ page, size }) => ({ url: `/services${query(page, size)}` }),
  providesTags: (result, error, arg) =>
    result ? [...result.map(({ _id }) => ({ type: "service", id: _id })), "service"] : ["services"],
  onQueryStarted: ({ page, size }, { dispatch, queryFulfilled }) => {},
};
export default getServices;
