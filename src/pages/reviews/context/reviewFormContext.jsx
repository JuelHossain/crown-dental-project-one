// form-context.ts file
import { createFormContext } from "@mantine/form";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetServiceReviewsQuery } from "../../../features/reviews/reviewsApi";
import { selectServiceId } from "../../../features/services/servicesSelector";
import useAuth from "../../../hooks/auth/useAuth";
import reviewFormInitial from "./helper/reviewFormInitial";
import useSubmitHandler from "./useSubmitHandler";

// You can give context variables any name
export const [FormProvider, useReviewFormContext, useForm] = createFormContext();

export function ReviewFormProvider({ children }) {
  const form = useForm(reviewFormInitial);
  const serviceId = useSelector(selectServiceId);
  const { email } = useAuth() || {};
  const { setValues, onSubmit, reset } = form || {};
  const { data, isLoading: getting } = useGetServiceReviewsQuery(serviceId) || {};
  const review = data?.find(({ ratingBy }) => email === ratingBy);
  const { rating, sayings } = review || {};

  useEffect(() => {
    if (email && (rating || sayings)) {
      setValues({ rating, sayings });
    } else {
      reset();
    }
  }, [rating, sayings, setValues, reset, serviceId, email]);

  const submitHandler = useSubmitHandler({ onSubmit, review, serviceId, getting });

  const values = { ...form, ...submitHandler };
  return <FormProvider form={values}>{children}</FormProvider>;
}
