import { LoadingOverlay, Stack } from "@mantine/core";
import { useReviewFormContext } from "../../../context/reviewFormContext";

export default function Form({ children }) {
  const { submitHandler, loading } = useReviewFormContext();
  return (
    <Stack component="form" onSubmit={submitHandler} className="relative  ">
      {children}
      <LoadingOverlay visible={loading} />
    </Stack>
  );
}
