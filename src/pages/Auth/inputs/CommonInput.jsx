import { TextInput } from "@mantine/core";
import { useSelector } from "react-redux";
import { selectActiveInput } from "../../../features/auth/authSelector";
import { useAuthFormContext } from "../context/authFormContext";

export default function CommonInput() {
  const {getInputProps} = useAuthFormContext();
  const activeInput = useSelector(selectActiveInput);
  return <TextInput placeholder="Type Here" {...getInputProps(activeInput)} />;
}
