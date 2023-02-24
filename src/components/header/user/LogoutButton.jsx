import { ActionIcon } from "@mantine/core";
import { FaSignOutAlt } from "react-icons/fa";

export default function LogoutButton() {
  return (
    <ActionIcon className="bg-sec-5 text-white hover:bg-sec-7  w-8 h-8">
      <FaSignOutAlt />
    </ActionIcon>
  );
}
