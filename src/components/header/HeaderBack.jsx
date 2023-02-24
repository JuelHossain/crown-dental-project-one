import { Overlay, useMantineColorScheme } from "@mantine/core";

export default function HeaderBack() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div className="h-20 relative">
      <Overlay
        gradient={
          dark
            ? "linear-gradient(360deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, .80) 80%)"
            : "linear-gradient(360deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, .20) 60%)"
        }
        opacity={dark ? 1 : 0.5}
        zIndex={0}
      />
      <div className="bg-gradient-to-r from-main-5/5 via-sec-5/10 to-main-5/5 w-full h-full" />
    </div>
  );
}
