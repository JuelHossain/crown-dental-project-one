// form-context.ts file
import { createFormContext } from "@mantine/form";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/auth/authSelector";
import { useGetReviewQuery } from "../../../features/reviews/reviewsApi";
import { selectServiceId } from "../../../features/services/servicesSelector";

// You can give context variables any name
export const [FormProvider, useReviewFormContext, useForm] = createFormContext();

export function ReviewFormProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const serviceId = useSelector(selectServiceId);
  const { email } = useSelector(selectUser) || {};
  const data = useGetReviewQuery(serviceId, email);
  const { rating, sayings } = data.data ?? {};
  const form = useForm({
    initialValues: {
      rating: 0,
      sayings: "",
    },
    validate: {
      rating: (value) => (value === 0 ? "Please Rate by stars" : null),
      sayings: (value) => (value.length < 10 ? " " : null),
    },
  });
  const { setValues } = form;

  useEffect(() => {
    if (rating && sayings) {
      setValues({ rating, sayings });
    } else {
      setValues({ rating: 0, sayings: "" });
    }
  }, [rating, sayings, setValues]);

  const values = { ...form, loading, setLoading };
  return <FormProvider form={values}>{children}</FormProvider>;
}
