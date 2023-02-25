/* eslint-disable import/no-extraneous-dependencies */
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { useAuthFormContext } from "./authFormContext";
import useLogin from "./hooks/useLogin";
import useRegister from "./hooks/useRegister";
import useResetPassword from "./hooks/useResetPassword";
import useUserStatus from "./hooks/useUserStatus";
import useVerification from "./hooks/useVerification";

export default function useSubmitHandler() {
  const { onSubmit, activeInput, setActiveInput, loading } = useAuthFormContext();
  const login = useLogin();
  const register = useRegister();
  const resetPassword = useResetPassword();
  const userStatus = useUserStatus();
  const verification = useVerification();
  const [user] = useAuthState(auth);

  const operation = async ({ email, password, name, terms }) => {
    if (user) {
      await verification();
    } else if (email && password && name && terms) {
      await register();
    } else if (email && password && name) {
      setActiveInput("terms");
    } else if (email && activeInput === "passwordReset") {
      await resetPassword();
    } else if (email && password) {
      await login();
    } else if (email && name) {
      setActiveInput("password");
    } else if (email) {
      await userStatus();
    } else {
      setActiveInput("email");
    }
  };
  const submitHandler = onSubmit(operation);
  return { submitHandler, loading };
}
