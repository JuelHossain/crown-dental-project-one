import { ActionIcon } from "@mantine/core";
import { signOut } from "firebase/auth";
import { FaSignOutAlt } from "react-icons/fa";
import { auth } from "../../../firebase";

export default function LogoutButton() {
  return (
    <ActionIcon onClick={() => signOut(auth)} className="bg-sec-5 text-white hover:bg-sec-7  w-8 h-8">
      <FaSignOutAlt />
    </ActionIcon>
  );
}
