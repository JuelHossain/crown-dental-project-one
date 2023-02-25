// form-context.ts file
import { createFormContext } from "@mantine/form";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/auth/authSelector";
import { useGetReviewQuery } from "../../../features/reviews/reviewsApi";
import { selectServiceId } from "../../../features/services/servicesSelector";
import reviewFormInitial from "./helper/reviewFormInitial";
import useSubmitHandler from "./useSubmitHandler";

// You can give context variables any name
export const [FormProvider, useReviewFormContext, useForm] = createFormContext();

export function ReviewFormProvider({ children }) {
  const form = useForm(reviewFormInitial);
  const serviceId = useSelector(selectServiceId);
  const { email } = useSelector(selectUser) || {};

  const { setValues, onSubmit } = form || {};
  const { data: review, isLoading: getting } = useGetReviewQuery(serviceId, email) || {};
  const { rating, sayings } = review || {};

  useEffect(() => {
    if (rating && sayings) {
      setValues({ rating, sayings });
    } else {
      setValues({ rating: 0, sayings: "" });
    }
  }, [rating, sayings, setValues]);

  const submitHandler = useSubmitHandler({ onSubmit, review, serviceId, getting });

  const values = { ...form, ...submitHandler, review };
  return <FormProvider form={values}>{children}</FormProvider>;
}
