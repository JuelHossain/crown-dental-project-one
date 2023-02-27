// form-context.ts file
import { createFormContext } from "@mantine/form";
import { useEffect } from "react";
import { useGetReviewQuery } from "../../../features/reviews/reviewsApi";
import useAuth from "../../../hooks/auth/useAuth";
import useServiceId from "../../../hooks/services/useServiceId";
import reviewFormInitial from "./helper/reviewFormInitial";
import useSubmitHandler from "./useSubmitHandler";

// You can give context variables any name
export const [FormProvider, useReviewFormContext, useForm] = createFormContext();

export function ReviewFormProvider({ children, id }) {
  const form = useForm(reviewFormInitial);
  const serviceId = useServiceId() || {};
  const { email } = useAuth() || {};

  const { setValues, onSubmit } = form || {};
  const { data: review, isLoading: getting } = useGetReviewQuery({ id: id || serviceId, email }) || {};

  const { rating, sayings } = review || {};

  useEffect(() => {
    if (rating && sayings) {
      setValues({ rating, sayings });
    } else {
      setValues({ rating: 0, sayings: "" });
    }
  }, [rating, sayings, setValues]);

  const submitHandler = useSubmitHandler({ onSubmit, review, serviceId, getting });

  const values = { ...form, ...submitHandler };
  return <FormProvider form={values}>{children}</FormProvider>;
}
