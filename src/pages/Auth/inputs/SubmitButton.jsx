import { Button, Group } from "@mantine/core";

export default function SubmitButton() {
  return (
    <Group className="justify-center">
      <Button type="submit" className="h-8 pt-1 w-40">
        Submit
      </Button>
    </Group>
  );
}
