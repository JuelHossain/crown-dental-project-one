import { TextInput } from "@mantine/core";
import { useServiceFormContext } from "../../context/serviceFormContext";

export default function Name() {
  const { getInputProps } = useServiceFormContext();

  return <TextInput label="Service Name" placeholder="Service Name" {...getInputProps("name")} />;
}
