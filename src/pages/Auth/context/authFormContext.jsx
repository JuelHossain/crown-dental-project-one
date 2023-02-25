// form-context.ts file
import { createFormContext, hasLength, isEmail, isNotEmpty } from "@mantine/form";
import { useState } from "react";

// You can give context variables any name
export const [FormProvider, useAuthFormContext, useForm] = createFormContext();

export function AuthFormProvider({ children }) {
  const [activeInput, setActiveInput] = useState("email");
  const [emailStatus, setEmailStatus] = useState(1);
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      name: "",
      passwordReset: "",
      terms: false,
      verified: false,
    },
    validate: {
      email: activeInput === "email" && isEmail("InValid Email"),
      password: activeInput === "password" && hasLength({ min: 6 }, "Password must be 6 digits long"),
      name: activeInput === "name" && hasLength({ min: 2 }, "Name must be at least 2 characters"),
      terms: activeInput === "terms" && isNotEmpty("You must accept terms & conditions"),
    },
  });
  const values = { ...form, activeInput, setActiveInput, loading, setLoading, emailStatus, setEmailStatus };
  return <FormProvider form={values}>{children}</FormProvider>;
}
