/* eslint-disable import/no-extraneous-dependencies */
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectActiveInput } from "../../../features/auth/authSelector";
import { setActiveInput, setEmailStatus } from "../../../features/auth/authSlice";
import { auth } from "../../../firebase";
import { useAuthFormContext } from "./authFormContext";

export default function useSubmitHandler() {
  const { onSubmit, setFieldError, reset } = useAuthFormContext();
  const activeInput = useSelector(selectActiveInput);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const operation = async ({ email, password, name }) => {
    if (password && email && name) {
      try {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, { displayName: name });
        setLoading(false);
        reset();
        dispatch(setActiveInput("email"));
        dispatch(setEmailStatus(1));
        navigate("/");
      } catch (err) {
        setLoading(false);
        setFieldError("password", err?.code);
      }
    } else if (email && activeInput === "passwordReset") {
      try {
        setLoading(true);
        await sendPasswordResetEmail(auth, email);
        dispatch(setActiveInput("passwordResetEmailSent"));
        setLoading(false);
        await setTimeout(() => {
          dispatch(setActiveInput("password"));
        }, 30000);
      } catch (err) {
        setLoading(false);
        setFieldError("passwordReset", err?.code);
      }
    } else if (email && password) {
      try {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password);
        setLoading(false);
        reset();
        dispatch(setActiveInput("email"));
        dispatch(setEmailStatus(1));
        navigate("/");
      } catch (err) {
        setLoading(false);
        setFieldError("password", err?.code);
      }
    } else if (email && name) {
      dispatch(setActiveInput("password"));
    } else if (email) {
      try {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, "1234");
        setLoading(false);
      } catch (err) {
        setLoading(false);

        if (err?.code === "auth/user-not-found") {
          dispatch(setEmailStatus(0));
          dispatch(setActiveInput("name"));
        } else if (err?.code === "auth/wrong-password") {
          dispatch(setActiveInput("password"));
        } else {
          setFieldError("email", err?.code || err?.message);
        }
      }
    } else {
      dispatch(setActiveInput("email"));
    }
  };
  const submitHandler = onSubmit(operation);
  return { submitHandler, loading };
}
