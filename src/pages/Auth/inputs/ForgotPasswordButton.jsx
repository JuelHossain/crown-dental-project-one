import { Button } from "@mantine/core";
import { useAuthFormContext } from "../context/authFormContext";

export default function ForgotPasswordButton() {
  const { setFieldValue, values, setActiveInput, errors } = useAuthFormContext();

  const forgotHandler = () => {
    setActiveInput("passwordReset");
    setFieldValue("passwordReset", values?.email);
  };

  return (
    errors?.password && (
      <Button className="flex" onClick={forgotHandler} compact variant="subtle">
        Forgot Password?
      </Button>
    )
  );
}
