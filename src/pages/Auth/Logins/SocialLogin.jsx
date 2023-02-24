import { ActionIcon, Group, Stack } from "@mantine/core";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
  return (
    <Stack className="bg-neu-1 dark:bg-stone-800/80 rounded-xl p-4 gap-2">
      <p className="text-center">Login With Socials</p>
      <Group className="justify-center gap-2">
        <ActionIcon className="h-8 w-8">
          <FaFacebook size={20} className="text-blue-500" />
        </ActionIcon>
        <ActionIcon className="h-8 w-8">
          <FcGoogle size={20} />
        </ActionIcon>
      </Group>
    </Stack>
  );
}
