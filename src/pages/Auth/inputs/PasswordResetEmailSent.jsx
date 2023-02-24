/* eslint-disable no-plusplus */
import { Alert } from "@mantine/core";
import { TiTick } from "react-icons/ti";
import useTimer from "../../../hooks/useTimer";

export default function PasswordResetEmailSent() {
  const timer = useTimer(29);
  return (
    <Alert className="max-w-sm relative" icon={<TiTick size={16} />} title="Email Sent">
      A Password Reset link Has Been Sent to Your email . please click on the link to reset your password and try
      logging in again.
      <span className="absolute top-3 right-3">{timer}</span>
    </Alert>
  );
}
