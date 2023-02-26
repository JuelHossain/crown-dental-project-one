/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
import { useAuthFormContext } from "../context/authFormContext";

export default function CommonLabel() {
  const { activeInput, emailStatus } = useAuthFormContext();
  const title =
    activeInput === "name"
      ? "What is your name?"
      : activeInput === "password" && !emailStatus
      ? "Please Set a Password"
      : activeInput === "password"
      ? "What is your password?"
      : activeInput === "passwordReset"
      ? "Reset Your Password Now"
      : activeInput === "passwordResetEmailSent"
      ? "Reset Email Sent Successfully"
      : activeInput === "terms"
      ? "Please Accept Terms & Conditions"
      : activeInput === "verificationEmailSent"
      ? "Please Verify Your Email"
      : "What is your Email Address?";

  return (
    <div>
      <h3 className="text-main-5">{title}</h3>
    </div>
  );
}
