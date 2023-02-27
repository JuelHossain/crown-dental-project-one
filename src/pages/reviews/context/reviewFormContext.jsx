// form-context.ts file
import { createFormContext } from "@mantine/form";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetReviewQuery } from "../../../features/reviews/reviewsApi";
import { selectServiceId } from "../../../features/services/servicesSelector";
import useAuth from "../../../hooks/auth/useAuth";
import reviewFormInitial from "./helper/reviewFormInitial";
import useSubmitHandler from "./useSubmitHandler";

// You can give context variables any name
export const [FormProvider, useReviewFormContext, useForm] = createFormContext();

export function ReviewFormProvider({ children, id, refetch }) {
  const form = useForm(reviewFormInitial);
  const serviceId = useSelector(selectServiceId);
  const { email } = useAuth() || {};

  const { setValues, onSubmit, reset } = form || {};
  const {
    data: review,
    isLoading: getting,
    refetch: refetchThis,
  } = useGetReviewQuery({ id: id || serviceId, email }) || {};

  const { rating, sayings } = review || {};

  useEffect(() => {
    if (rating || sayings) {
      setValues({ rating, sayings });
    } else {
      setValues({ rating: 0, sayings: "" });
    }
  }, [rating, sayings, setValues, reset, serviceId]);

  const submitHandler = useSubmitHandler({ onSubmit, review, serviceId, getting, refetch, refetchThis });

  const values = { ...form, ...submitHandler };
  return <FormProvider form={values}>{children}</FormProvider>;
}
