/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
import { useSelector } from "react-redux";
import { selectActiveInput, selectEmailStatus } from "../../../features/auth/authSelector";

export default function CommonLabel() {
  const activeInput = useSelector(selectActiveInput);
  const emailStatus = useSelector(selectEmailStatus);
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
      : "What is your Email Address?";

  return (
    <div>
      <h2 className="text-main-5">{title}</h2>
    </div>
  );
}
