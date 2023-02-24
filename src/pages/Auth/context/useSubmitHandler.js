import { useAuthFormContext } from "./authFormContext";

export default function useSubmitHandler() {
  const { onSubmit } = useAuthFormContext();
  return onSubmit(({ email, password, name }) => {
      if (email) {
        
    }
  });
}
