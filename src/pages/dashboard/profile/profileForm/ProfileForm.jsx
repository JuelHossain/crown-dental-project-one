import { Notification, TextInput } from "@mantine/core";
import useAuth from "../../../../hooks/auth/useAuth";

export default function ProfileForm() {
  const { displayName, email } = useAuth() || {};
  return (
    <form action="#" className=" flex flex-col gap-5 sm:gap-10">
      <TextInput className="w-full" size="xl" value={displayName} readOnly label="Your Name" />
          <TextInput className="w-full" size="xl" value={email} readOnly label="Your Email" />
          <Notification > More Feature Coming Soon </Notification>
    </form>
  );
}
