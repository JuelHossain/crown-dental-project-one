import { Button, Group } from "@mantine/core";
import { useAuthFormContext } from "../context/authFormContext";

export default function SubmitButton() {
  const { activeInput } = useAuthFormContext();
  return (
    activeInput !== "passwordResetEmailSent" && (
      <Group className="justify-center">
        <Button type="submit" className="h-8 pt-1 w-40">
          {activeInput === "verificationEmailSent" ? "Login" : "Submit"}
        </Button>
      </Group>
    )
  );
}
