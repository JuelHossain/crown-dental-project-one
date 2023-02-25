import { LoadingOverlay, Stack } from "@mantine/core";
import { useReviewFormContext } from "../../../context/reviewFormContext";

export default function Form({ children }) {
  const {
    submitHandler,
    data: { isLoading },
  } = useReviewFormContext();
  return (
    <Stack component="form" onSubmit={submitHandler} className="relative  ">
      {children}
      <LoadingOverlay visible={isLoading} />
    </Stack>
  );
}
