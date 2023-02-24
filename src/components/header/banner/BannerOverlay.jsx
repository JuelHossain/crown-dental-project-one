import { Overlay, useMantineColorScheme } from "@mantine/core";

export default function BannerOverlay() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Overlay
      gradient={
        dark
          ? "linear-gradient(360deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, .80) 80%)"
          : "linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
      }
      opacity={dark ? 1 : 0.5}
      zIndex={0}
    />
  );
}
