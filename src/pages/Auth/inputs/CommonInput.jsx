/* eslint-disable no-nested-ternary */
import { PasswordInput, TextInput } from "@mantine/core";
import { useSelector } from "react-redux";
import { selectActiveInput } from "../../../features/auth/authSelector";
import { useAuthFormContext } from "../context/authFormContext";
import ForgotPasswordButton from "./ForgotPasswordButton";
import PasswordResetEmailSent from "./PasswordResetEmailSent";

export default function CommonInput() {
  const { getInputProps } = useAuthFormContext();
  const activeInput = useSelector(selectActiveInput);
  console.log(activeInput)
  return activeInput === "password" ? (
    <PasswordInput description={<ForgotPasswordButton />} placeholder="Password" {...getInputProps("password")} />
  ) : activeInput === "passwordResetEmailSent" ? (
    <PasswordResetEmailSent />
  ) : (
    <TextInput
      description={activeInput === "passwordReset" && "A password reset link Will Be Sent to this Email Address"}
      readOnly={activeInput === "passwordReset"}
      placeholder="Type Here"
      {...getInputProps(activeInput)}
    />
  );
}
