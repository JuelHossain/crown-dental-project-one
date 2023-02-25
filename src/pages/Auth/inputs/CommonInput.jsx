/* eslint-disable no-nested-ternary */
import { PasswordInput, TextInput } from "@mantine/core";
import { useAuthFormContext } from "../context/authFormContext";
import ForgotPasswordButton from "./ForgotPasswordButton";
import PasswordResetEmailSent from "./PasswordResetEmailSent";
import TermsAndConditions from "./TermsAndConditions";
import VerificationEmailSent from "./VerificationEmailSent";

export default function CommonInput() {
  const { getInputProps, activeInput } = useAuthFormContext();

  return activeInput === "password" ? (
    <PasswordInput
      autoFocus
      description={<ForgotPasswordButton />}
      placeholder="Password"
      {...getInputProps("password")}
    />
  ) : activeInput === "passwordResetEmailSent" ? (
    <PasswordResetEmailSent />
  ) : activeInput === "terms" ? (
    <TermsAndConditions />
  ) : activeInput === "verificationEmailSent" ? (
    <VerificationEmailSent />
  ) : (
    <TextInput
      description={activeInput === "passwordReset" && "A password reset link Will Be Sent to this Email Address"}
      readOnly={activeInput === "passwordReset"}
      placeholder="Type Here"
      {...getInputProps(activeInput)}
    />
  );
}
