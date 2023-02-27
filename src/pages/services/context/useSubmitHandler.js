/* eslint-disable no-underscore-dangle */
import { useAddServiceMutation, useModifyServiceMutation } from "../../../features/services/servicesApi";

// submit handler
export default function useSubmitHandler({ onSubmit, reset, service }) {
  // add service hook
  const [addService, { isLoading: adding, addError }] = useAddServiceMutation();

  // update service hook
  const [modifyService, { isLoading: modifying, modifyError }] = useModifyServiceMutation();

  // all loading states
  const loading = adding || modifying;
  const error = addError || modifyError;

  const submitHandler = (e) =>
    onSubmit(async (form) => {
      const data = { ...form, createdAt: new Date(), id: service._id };
      if (service) {
        // update service
        await modifyService(data);
      } else {
        // add service
        await addService(data);
        reset();
      }
    })(e);
  return { submitHandler, loading, error };
}
