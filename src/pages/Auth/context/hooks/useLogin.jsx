import { sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase";
import { useAuthFormContext } from "../authFormContext";

export default function useLogin() {
  const { setFieldError, reset, setActiveInput, setEmailStatus, setLoading, values } = useAuthFormContext();
  const { email, password } = values || {};
  const navigate = useNavigate();
  return async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      if (auth.currentUser.emailVerified) {
        setLoading(false);
        reset();
        setActiveInput("email");
        setEmailStatus(1);
        navigate("/");
      } else {
        await sendEmailVerification(auth.currentUser);
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
