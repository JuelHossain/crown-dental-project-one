import { Paper } from "@mantine/core";

export default function CardWrapper({ children }) {
  return (
    <Paper withBorder radius="md" className="relative p-6 h-full bg-main-9/3 ">
      {children}
    </Paper>
  );
}
