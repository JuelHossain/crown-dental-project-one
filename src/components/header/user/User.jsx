import { Group } from "@mantine/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import UserIcon from "./UserIcon";

export default function User() {
  const [user] = useAuthState(auth);
  return user ? (
    <Group spacing={6} noWrap>
      <UserIcon />
      <LogoutButton />
    </Group>
  ) : (
    <LoginButton />
  );
}
