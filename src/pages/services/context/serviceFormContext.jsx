/* eslint-disable no-nested-ternary */
// form-context.ts file
import { createFormContext } from "@mantine/form";
import { useEffect } from "react";
import { useGetServiceQuery } from "../../../features/services/servicesApi";
import useImageUpload from "../../../hooks/shared/useImageUpload";
import serviceFormInitial from "./helper/serviceFormInitial";
import useSubmitHandler from "./useSubmitHandler";

// You can give context variables any name
export const [FormProvider, useServiceFormContext, useForm] = createFormContext();

export function ServiceFormProvider({ children, serviceId, add }) {
  const form = useForm(serviceFormInitial);
  const { data: service } = useGetServiceQuery(serviceId, { skip: !serviceId });
  const { setValues, onSubmit, reset } = form;

  useEffect(() => {
    if (serviceId && service) {
      const { _id, ...serviceData } = service || {};
      setValues(serviceData);
    } else {
      reset();
    }
  }, [service, setValues, reset, add, serviceId]);

  // image upload
  const [uploadImage, uploading] = useImageUpload();

  // submit handler
  const submitHandler = useSubmitHandler({ onSubmit, reset, service, add });

  const values = { ...form, ...submitHandler, uploadImage, uploading };
  return <FormProvider form={values}>{children}</FormProvider>;
}
