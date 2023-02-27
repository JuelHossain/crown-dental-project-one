import { Textarea } from "@mantine/core";
import { useReviewFormContext } from "../../../context/reviewFormContext";

export default function Sayings() {
  const { getInputProps } = useReviewFormContext();
  return <Textarea autosize maxRows={3} {...getInputProps("sayings")} placeholder="inspire us with your words " />;
}
