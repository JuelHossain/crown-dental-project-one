import { sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useGenerateTokenMutation } from "../../../../features/auth/authApi";
import { auth } from "../../../../firebase";
import { useAuthFormContext } from "../authFormContext";

export default function useLogin() {
  const { setFieldError, reset, setActiveInput, setEmailStatus, setLoading, values } = useAuthFormContext();
  const { email, password } = values || {};
  const [generateToken] = useGenerateTokenMutation();

  return async (admin) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, admin?.email || email, admin?.password || password);
      if (auth.currentUser.emailVerified) {
        await generateToken(auth?.currentUser);
        setLoading(false);
        reset();
        setActiveInput("email");
        setEmailStatus(1);
      } else {
        await sendEmailVerification(auth?.currentUser);
        setActiveInput("verificationEmailSent");
        setLoading(false);
        setEmailStatus(1);
      }
    } catch (err) {
      setLoading(false);
      setFieldError("password", err?.code);
    }
  };
}
