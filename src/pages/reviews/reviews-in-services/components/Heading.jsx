import { Container, Text, Title } from "@mantine/core";

export default function Heading() {
  return (
    <div className="bg-neu-1 dark:bg-neu-9/90 p-10">
      <Container size="xs">
        <Title order={3} align="center">
          What Our Customer's are saying?
        </Title>
        <Text align="center">
          You can give us a rating too. please give us a rating from the left corner of this page.
        </Text>
      </Container>
    </div>
  );
}
