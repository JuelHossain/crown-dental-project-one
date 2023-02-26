import { Card } from "@mantine/core";

export default function CardWrapper({ children }) {
  return (
    <Card shadow="md" className="relative">
      {children}
    </Card>
  );
}
