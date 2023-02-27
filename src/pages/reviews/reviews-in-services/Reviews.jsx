import { Stack } from "@mantine/core";
import Heading from "./components/Heading";

import ReviewCarousel from "./components/ReviewCarousel";

export default function Reviews({ extra, reviews, home }) {
  return (
    <Stack
      className={`bg-gradient-to-tr rounded from-main-5 via-sec-5 to-main-5  max-sm:gap-5 max-md:gap-10 ${extra} flex justify-start m-0 gap-0`}
    >
      <Heading />
      <div className="relative flex-1 xl:container xl:mx-auto">
        <ReviewCarousel reviews={reviews} home={home} />
      </div>
    </Stack>
  );
}
