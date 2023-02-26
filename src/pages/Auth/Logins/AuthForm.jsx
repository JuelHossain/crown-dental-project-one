import { Paper } from "@mantine/core";
import AuthTitle from "./AuthTitle";
import LoginWithEmail from "./LoginWithEmail";
import SocialLogin from "./SocialLogin";

export default function AuthForm() {
  return (
    <div className="z-[201] px-2  w-full">
      <Paper className="w-full  p-10 z-10 rounded-xl space-y-4 relative ">
        <AuthTitle />
        <LoginWithEmail />
        <SocialLogin />
      </Paper>
    </div>
  );
}
