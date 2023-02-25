import { NumberInput } from "@mantine/core";
import { FaMedal } from "react-icons/fa";

import { useServiceFormContext } from "../../context/serviceFormContext";

export default function Price() {
  const { getInputProps } = useServiceFormContext();

  return (
    <NumberInput
      min={0}
      label="Service Cost"
      placeholder="Service Cost"
      {...getInputProps("cost")}
      icon={<FaMedal size={18} />}
    />
  );
}
