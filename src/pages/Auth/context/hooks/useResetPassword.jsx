import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../../firebase";
import { useAuthFormContext } from "../authFormContext";

export default function useResetPassword() {
  const { setFieldError, setActiveInput, setLoading, values: { email } = {} } = useAuthFormContext();
  return async () => {
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      setActiveInput("passwordResetEmailSent");
      setLoading(false);
      await setTimeout(() => {
        setActiveInput("password");
      }, 30000);
    } catch (err) {
      setLoading(false);
      setFieldError("passwordReset", err?.code);
    }
  };
}
