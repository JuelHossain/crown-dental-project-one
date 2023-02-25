/* eslint-disable no-nested-ternary */
import { Button, Group } from "@mantine/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../../features/auth/authSelector";
import { useReviewFormContext } from "../../../context/reviewFormContext";

export default function SubmitButton() {
  const user = useSelector(selectUser);
  const { review } = useReviewFormContext();
  return (
    <Group position="right">
      <Button type="submit">{review ? "Update" : user ? "Submit" : "Please Login"}</Button>
    </Group>
  );
}
