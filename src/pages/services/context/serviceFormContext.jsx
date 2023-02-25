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

export function ServiceFormProvider({ children }) {
  const form = useForm(serviceFormInitial);
  const serviceId = useSelector(selectServiceId);
  const { data: service } = useGetServiceQuery(serviceId);
  const { setValues, onSubmit, reset } = form;

  useEffect(() => {
    if (service) {
      const { _id, ...serviceData } = service;
      setValues(serviceData);
    }
  }, [service, setValues]);

  // image upload
  const [uploadImage, uploading] = useImageUpload();

  // submit handler
  const submitHandler = useSubmitHandler({ onSubmit, reset, service });

  const values = { ...form, ...submitHandler, uploadImage, uploading };
  return <FormProvider form={values}>{children}</FormProvider>;
}
