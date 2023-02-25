import { Paper } from "@mantine/core";
import LoginWithEmail from "./LoginWithEmail";
import SocialLogin from "./SocialLogin";

export default function AuthForm() {
  return (
    <div className="z-[201] px-2 sm:px-20 w-full">
      <Paper className="w-full -mt-20 sm:-mt-32 p-10 z-10 rounded-xl space-y-4 relative">
        <LoginWithEmail />
        <SocialLogin />
      </Paper>
    </div>
  );
}
