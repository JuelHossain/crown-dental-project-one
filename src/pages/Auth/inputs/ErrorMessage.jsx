import { useAuthFormContext } from "../context/authFormContext";

export default function ErrorMessage() {
  const { errors } = useAuthFormContext();
  return errors.input && <p className="text-red-500 text-sm ml-0.5">{errors.input}</p>;
}
