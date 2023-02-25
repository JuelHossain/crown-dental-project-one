import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";
import { useAuthFormContext } from "../authFormContext";

export default function useUserStatus() {
  const { setFieldError, setActiveInput, setEmailStatus, setLoading, values: { email } = {} } = useAuthFormContext();
  return async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, "123456");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err?.code === "auth/user-not-found") {
        setEmailStatus(0);
        setActiveInput("name");
      } else if (err?.code === "auth/wrong-password") {
        setActiveInput("password");
      } else {
        setFieldError("email", err?.code || err?.message);
      }
    }
  };
}
