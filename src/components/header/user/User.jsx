import { Group } from "@mantine/core";
import useAuth from "../../../hooks/auth/useAuth";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import UserIcon from "./UserIcon";

export default function User() {
  const user = useAuth();

  
  return user ? (
    <Group spacing={6} noWrap>
      <UserIcon />
      <LogoutButton />
    </Group>
  ) : (
    <LoginButton />
  );
}
