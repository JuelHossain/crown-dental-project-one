import { ActionIcon } from "@mantine/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaUser } from "react-icons/fa";

export default function UserIcon() {
  return (
    <ActionIcon
      className="bg-sec-5 text-white hover:bg-sec-7 w-8 h-8"
      //   onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      <FaUser size={18} />
    </ActionIcon>
  );
}
