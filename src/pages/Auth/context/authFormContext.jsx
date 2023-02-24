// form-context.ts file
import { createFormContext, hasLength, isEmail } from "@mantine/form";
import { useSelector } from "react-redux";
import { selectActiveInput } from "../../../features/auth/authSelector";

// You can give context variables any name
export const [FormProvider, useAuthFormContext, useForm] = createFormContext();

export function AuthFormProvider({ children }) {
  const activeInput = useSelector(selectActiveInput);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate: {
      email: activeInput === "email" && isEmail("InValid Email"),
      password: activeInput === "password" && hasLength({ min: 6 }, "Password must be 6 digits long"),
      name: activeInput === "name" && hasLength({ min: 2 }, "Name must be at least 2 characters"),
    },
  });
  return <FormProvider form={form}>{children}</FormProvider>;
}
