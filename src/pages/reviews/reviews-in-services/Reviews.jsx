import { Stack } from "@mantine/core";
import Heading from "./components/Heading";

import ReviewCarousel from "./components/ReviewCarousel";

export default function Reviews() {
  return (
    <Stack className="bg-gradient-to-tr rounded from-main-5/10 via-sec-5/20 to-main-5/10 p-4 sm:p-10 gap-5 sm:gap-10">
      <Heading />
      <ReviewCarousel />
    </Stack>
  );
}
