/* eslint-disable no-plusplus */
import { Alert, Button } from "@mantine/core";
import { TiTick } from "react-icons/ti";
import useTimer from "../../../hooks/useTimer";
import { useAuthFormContext } from "../context/authFormContext";
import useLogin from "../context/hooks/useLogin";

export default function VerificationEmailSent() {
  const login = useLogin();
  const timer = useTimer(29, { reset: true });
  const { errors } = useAuthFormContext();
  return (
    <Alert className="max-w-sm relative" icon={<TiTick size={16} />} title="Verification Email Sent">
      A email verification link Has Been Sent to Your email . please click on the link to verify your email and click on
      the submit button.
      <div className="absolute top-3 right-3 flex gap-3 items-center">
        {errors?.verified && <p className="text-xs text-red-400">{errors?.verified}</p>}
        <span className="">{timer}</span>
      </div>
      <Button
        compact
        size="xs"
        variant="white"
        onClick={async () => {
          await login(true);
        }}
      >
        send Email Verification Again
      </Button>
    </Alert>
  );
}
