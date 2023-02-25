import { Group } from "@mantine/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/auth/authSelector";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import UserIcon from "./UserIcon";

export default function User() {
  const user = useSelector(selectUser);
  return user ? (
    <Group spacing={6} noWrap>
      <UserIcon />
      <LogoutButton />
    </Group>
  ) : (
    <LoginButton />
  );
}
