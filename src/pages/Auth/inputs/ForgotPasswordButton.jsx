import { Button } from "@mantine/core";
import { useDispatch } from "react-redux";
import { setActiveInput } from "../../../features/auth/authSlice";
import { useAuthFormContext } from "../context/authFormContext";

export default function ForgotPasswordButton() {
  const { setFieldValue, values } = useAuthFormContext();
  const dispatch = useDispatch();
  const forgotHandler = () => {
    dispatch(setActiveInput("passwordReset"));
    setFieldValue("passwordReset", values?.email);
  };
  const { errors } = useAuthFormContext();
  return (
    errors?.password && (
      <Button className="flex" onClick={forgotHandler} compact variant="subtle">
        Forgot Password?
      </Button>
    )
  );
}
