import { ActionIcon } from "@mantine/core";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../../features/auth/authSlice";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const logout = ()=>dispatch(userLoggedOut());
  return (
    <ActionIcon onClick={logout} className="bg-sec-5 text-white hover:bg-sec-7  w-8 h-8">
      <FaSignOutAlt />
    </ActionIcon>
  );
}
