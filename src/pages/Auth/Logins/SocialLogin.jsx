/* eslint-disable react-hooks/exhaustive-deps */
import { ActionIcon, Group, Stack } from "@mantine/core";
import { useEffect } from "react";
import { useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useGenerateTokenMutation } from "../../../features/auth/authApi";
import { auth } from "../../../firebase";
import useRedirect from "../../../hooks/auth/useRedirect";
import { useAuthFormContext } from "../context/authFormContext";

export default function SocialLogin() {
  const { errors, setFieldError, clearErrors } = useAuthFormContext();
  const [gLogin, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [fLogin, fUser, fLoading, fError] = useSignInWithFacebook(auth);
  const [generateToken] = useGenerateTokenMutation();
  const redirect = useRedirect();

  useEffect(() => {
    if (gError || fError) {
      setFieldError("social", gError?.code || fError?.code || fError?.message || gError?.message);
    } else {
      clearErrors();
    }
  }, [gError, fError, setFieldError, clearErrors]);

  useEffect(() => {
    if (gUser || fUser) {
      (async () => {
        await generateToken(auth.currentUser);
        redirect();
      })();
    }
  }, [gUser, fUser, generateToken]);

  return (
    <Stack className="bg-neu-1 dark:bg-stone-800/80 rounded-xl p-4 gap-2">
      <p className="text-center">Login With Socials</p>
      <Group className="justify-center gap-2">
        <ActionIcon
          loading={fLoading}
          onClick={async () => {
            fLogin();
          }}
          className="h-8 w-8"
        >
          <FaFacebook size={20} className="text-blue-500" />
        </ActionIcon>
        <ActionIcon
          loading={gLoading}
          onClick={async () => {
            gLogin();
          }}
          className="h-8 w-8"
        >
          <FcGoogle size={20} />
        </ActionIcon>
      </Group>
      {errors?.social && <p className="text-xs text-red-400 text-center">{errors.social}</p>}
    </Stack>
  );
}
