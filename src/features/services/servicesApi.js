import apiSlice from "../api/apiSlice";
import addService from "./helper/addService";
import deleteService from "./helper/deleteService";
import getService from "./helper/getService";
import getServices from "./helper/getServices";
import modifyService from "./helper/modifyService";

export const servicesApi = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    addService: mutation(addService),
    getService: query(getService),
    getServices: query(getServices),
    modifyService: mutation(modifyService),
    deleteService: mutation(deleteService),
  }),
});

export const {
  useAddServiceMutation,
  useGetServiceQuery,
  useGetServicesQuery,
  useDeleteServiceMutation,
  useModifyServiceMutation,
} = servicesApi;
