/* eslint-disable no-underscore-dangle */
import { Carousel } from "@mantine/carousel";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useSelector } from "react-redux";
import { useGetReviewsQuery } from "../../../../features/reviews/reviewsApi";
import { selectServiceId } from "../../../../features/services/servicesSelector";
import ReviewCard from "../review-card/ReviewCard";
import NoReviews from "./NoReviews";

export default function ReviewCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const serviceId = useSelector(selectServiceId);
  const { data: reviews } = useGetReviewsQuery(serviceId);

  const slides = reviews?.map((item) => (
    <Carousel.Slide className="h-full" key={item._id}>
      <ReviewCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="33%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
      slideGap="xl"
      align="center"
      slidesToScroll={mobile ? 1 : 2}
      height={166}
    >
      {reviews?.length === 0 ? <NoReviews /> : slides}
    </Carousel>
  );
}
