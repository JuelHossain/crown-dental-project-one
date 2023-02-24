import { Stack } from "@mantine/core";
import useSubmitHandler from "../context/useSubmitHandler";
import CommonInput from "../inputs/CommonInput";
import CommonLabel from "../inputs/CommonLabel";
import SubmitButton from "../inputs/SubmitButton";

export default function LoginWithEmail() {
  const submitHandler = useSubmitHandler();
  return (
    <Stack onSubmit={submitHandler} component="form" className="gap-2">
      <CommonLabel />
      <CommonInput />
      <SubmitButton />
    </Stack>
  );
}
