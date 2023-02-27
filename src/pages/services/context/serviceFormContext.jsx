/* eslint-disable no-nested-ternary */
// form-context.ts file
import { createFormContext } from "@mantine/form";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetServiceQuery } from "../../../features/services/servicesApi";
import { selectServiceId } from "../../../features/services/servicesSelector";
import useImageUpload from "../../../hooks/shared/useImageUpload";
import serviceFormInitial from "./helper/serviceFormInitial";
import useSubmitHandler from "./useSubmitHandler";

// You can give context variables any name
export const [FormProvider, useServiceFormContext, useForm] = createFormContext();

export function ServiceFormProvider({ children, add }) {
  const form = useForm(serviceFormInitial);
  const serviceId = useSelector(selectServiceId);
  console.log(serviceId);
  const { data: service } = useGetServiceQuery(serviceId);
  const { setValues, onSubmit, reset } = form;

  useEffect(() => {
    if (!add && service) {
      const { _id, ...serviceData } = service;
      setValues(serviceData);
    } else {
      reset();
    }
  }, [service, setValues, reset, add]);

  // image upload
  const [uploadImage, uploading] = useImageUpload();

  // submit handler
  const submitHandler = useSubmitHandler({ onSubmit, reset, service: serviceId ? service : undefined, add });

  const values = { ...form, ...submitHandler, uploadImage, uploading };
  return <FormProvider form={values}>{children}</FormProvider>;
}
