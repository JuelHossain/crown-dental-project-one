/* eslint-disable import/no-extraneous-dependencies */
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ToggleTheme() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      className="bg-main-5 text-white hover:bg-main-7"
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
    </ActionIcon>
  );
}
