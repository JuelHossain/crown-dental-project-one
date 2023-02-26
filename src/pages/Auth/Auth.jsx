import { Center, Stack } from "@mantine/core";
import { AuthFormProvider } from "./context/authFormContext";
import AuthForm from "./Logins/AuthForm";

export default function Auth() {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 h-[90vh] md:h-[70vh]">
      <div className="hidden sm:block">
        <img
          src="https://www.grandstreetdental.com/wp-content/uploads/2018/04/GSD_MainPage_SlideShow_1.jpg"
          alt="nothing"
          className="object-cover w-full h-full"
        />
      </div>
      <Center className="bg-gradient-to-tr from-main-5 via-sec-5 sm:col-span-2 md:col-span-1 ">
        <AuthFormProvider>
          <Stack className="items-center w-full max-w-lg p-5 xs:p-10    ">
            <AuthForm />
          </Stack>
        </AuthFormProvider>
      </Center>
    </div>
  );
}
