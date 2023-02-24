import { Group } from "@mantine/core";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import UserIcon from "./UserIcon";

export default function User() {
  const user = false;
  return user ? (
    <Group spacing={6} noWrap>
      <UserIcon />
      <LogoutButton />
    </Group>
  ) : (
    <LoginButton />
  );
}
