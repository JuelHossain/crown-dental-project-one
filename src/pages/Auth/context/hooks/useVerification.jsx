/* eslint-disable no-shadow */
import { useAuthState } from "react-firebase-hooks/auth";
import { useGenerateTokenMutation } from "../../../../features/auth/authApi";
import { auth } from "../../../../firebase";
import useRedirect from "../../../../hooks/useRedirect";
import { useAuthFormContext } from "../authFormContext";

export default function useVerification() {
  const [user] = useAuthState(auth);
  const redirect = useRedirect();
  const { setFieldError, clearErrors } = useAuthFormContext();
  const [generateToken] = useGenerateTokenMutation();

  return async () => {
    await user.reload();
    if (user?.emailVerified) {
      await generateToken(user);
      redirect();
    } else {
      setFieldError("verified", "not yet verified");
      setTimeout(clearErrors, 3000);
    }
  };
}
