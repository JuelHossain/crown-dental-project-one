/* eslint-disable no-underscore-dangle */
import { Carousel } from "@mantine/carousel";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ReviewCard from "../review-card/ReviewCard";
import NoReviews from "./NoReviews";

export default function ReviewCarousel({ reviews, home }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const desktop = useMediaQuery(`(min-width: ${theme.breakpoints.xl}px)`);

  const slides = reviews?.map((item) => (
    <Carousel.Slide  className="h-full  " key={item._id}>
      <ReviewCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      orientation={desktop && !home ? "vertical" : "horizontal"}
      slideSize="25%"
      breakpoints={[
        { maxWidth: "sm", slideSize: "100%", slideGap: "sm" },
        { maxWidth: "md", slideSize: "50%", slideGap: "md" },
        { maxWidth: "lg", slideSize: "33%", slideGap: "lg" },
        { maxWidth: "xl", slideSize: "25%", slideGap: "xl" },
      ]}
      slideGap="xl"
      align="start"
      height={desktop && !home ? "100%" : 220}
      slidesToScroll={mobile ? 1 : 2}
      className={` p-4 sm:p-10  ${!home && "xl:h-full xl:absolute xl:w-full "}`}
      classNames={{ container: !home && "xl:py-2 xl:space-y-4" }}
      containScroll="trimSnaps"
      loop
    >
      {reviews?.length === 0 ? <NoReviews /> : slides}
    </Carousel>
  );
}
