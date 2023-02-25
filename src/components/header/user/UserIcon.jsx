import { Button } from "@mantine/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/auth/authSelector";

export default function UserIcon() {
  const user = useSelector(selectUser);

  return (
    <Button leftIcon={<FaUser size={18} />} className="bg-sec-5 text-white hover:bg-sec-7  h-8">
      {user?.displayName}
    </Button>
  );
}
