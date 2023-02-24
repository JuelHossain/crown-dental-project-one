import { Button, Group } from "@mantine/core";
import { useSelector } from "react-redux";
import { selectActiveInput } from "../../../features/auth/authSelector";

export default function SubmitButton() {
  const activeInput = useSelector(selectActiveInput);
  return (
    activeInput !== "passwordResetEmailSent" && (
      <Group className="justify-center">
        <Button type="submit" className="h-8 pt-1 w-40">
          Submit
        </Button>
      </Group>
    )
  );
}
