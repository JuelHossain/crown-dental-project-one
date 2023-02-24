import { Stack } from "@mantine/core";
import Banner from "../../components/header/banner/Banner";
import { AuthFormProvider } from "./context/authFormContext";
import AuthForm from "./Logins/AuthForm";
import AuthTitle from "./Logins/AuthTitle";

export default function Auth() {
  return (
    <div className="relative">
      <Banner>
        <AuthFormProvider>
          <Stack className="mb-40 items-center   ">
            <AuthTitle />
            <AuthForm />
          </Stack>
        </AuthFormProvider>
      </Banner>
    </div>
  );
}
