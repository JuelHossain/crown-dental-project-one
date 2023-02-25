import { Stack } from "@mantine/core";
import Loading from "../../../components/shared/Loading";
import useSubmitHandler from "../context/useSubmitHandler";
import CommonInput from "../inputs/CommonInput";
import CommonLabel from "../inputs/CommonLabel";
import SubmitButton from "../inputs/SubmitButton";

export default function LoginWithEmail() {
  const { submitHandler, loading } = useSubmitHandler();
  return (
    <Stack onSubmit={submitHandler} component="form" className="gap-2">
      <CommonLabel />
      <CommonInput />
      <SubmitButton />
      <Loading visible={loading} />
    </Stack>
  );
}
