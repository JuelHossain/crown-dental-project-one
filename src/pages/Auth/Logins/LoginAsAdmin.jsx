import { Button, Group } from "@mantine/core";

export default function LoginAsAdmin() {
  return (
    <Group className="justify-center">
      <Button size="xs" variant="subtle" type="submit" className="h-8 pt-1 w-40">
        Login As Admin{" "}
      </Button>
    </Group>
  );
}
