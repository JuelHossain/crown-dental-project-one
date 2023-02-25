/* eslint-disable no-shadow */
import { onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase";
import { useAuthFormContext } from "../authFormContext";

export default function useVerification() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { setActiveInput, setFieldError, clearErrors } = useAuthFormContext();

  return async () => {
    if (user.emailVerified) {
      navigate("/");
    } else {
      setFieldError("verified", "not yet verified");
      setTimeout(clearErrors, 3000);
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user.emailVerified);
        } else {
          setActiveInput("email");
        }
      });
    }
  };
}
