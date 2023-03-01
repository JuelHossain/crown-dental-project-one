import { Badge, Group, Stack, Text, Title } from "@mantine/core";

export default function Heading({ title, badge, text }) {
  return (
    <Stack className="bg-gradient-to-br from-main-6 via-sec-0/5  w-full justify-center flex items-center   p-5 sm:p-10 max-xl:mt-3 shadow-sm ">
      <Group className="max-xl:justify-center">
        <Badge variant="filled" size="xl" radius={0}>
          {badge || "Dental Services We Provide"}
        </Badge>
      </Group>

      <Title className="text-center uppercase text-xl tracking-wider " order={2}>
        {title || " Please Checkout our services below"}
      </Title>

      <Text className="text-center max-w-2xl mx-auto">
        {text ||
          "Select your desired service and book an appointment now. if you have taken any of those service already please provide a review . we will be glad to know what you think about us."}
      </Text>
    </Stack>
  );
}
