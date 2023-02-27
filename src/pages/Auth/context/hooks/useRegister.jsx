import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthFormContext } from "../authFormContext";
/* eslint-disable import/no-extraneous-dependencies */
import { useGenerateTokenMutation } from "../../../../features/auth/authApi";
import { auth } from "../../../../firebase";

export default function useRegister() {
  const { setFieldError, reset, setActiveInput, setEmailStatus, setLoading, values } = useAuthFormContext();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { email, password, name } = values;
  const [generateToken] = useGenerateTokenMutation();

  return async () => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      if (auth.currentUser.emailVerified) {
        await generateToken(auth?.currentUser);
        setLoading(false);
        reset();
        setActiveInput("email");
        setEmailStatus(1);
        navigate(state?.from || "/");
      } else {
        await sendEmailVerification(auth.currentUser);
        setActiveInput("verificationEmailSent");
        setLoading(false);
        setEmailStatus(1);
      }
    } catch (err) {
      setLoading(false);
      setFieldError("password", err?.code);
      if (err?.code === "auth/invalid-email") {
        setActiveInput("email");
        setFieldError("email", "Invalid Email");
      }
    }
  };
}
