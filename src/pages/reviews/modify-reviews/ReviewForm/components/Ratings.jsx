import { Group, Rating } from "@mantine/core";
import { useReviewFormContext } from "../../../context/reviewFormContext";

export default function Ratings() {
  const { getInputProps, errors } = useReviewFormContext() ?? {};
  return (
    <Group>
      <Rating {...getInputProps("rating")} size="md" />
      {errors.rating && <p className="text-xs text-red-500">{errors?.rating}</p>}
    </Group>
  );
}
