import { LoadingOverlay, SimpleGrid } from "@mantine/core";
import useAuth from "../../../hooks/auth/useAuth";
import useGetReviews from "../../hooks/reviews/useGetReviews";
import ReviewCard from "../services/service-details/reviews/review-card/ReviewCard";

export default function ReviewList() {
  const user = useAuth();
  const { data, isLoading } = useGetReviews(undefined, user?.email);

  const services = data?.map((service) => <ReviewCard key={Math.random()} {...service} />);

  return (
    <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
      {services}
      <LoadingOverlay visible={isLoading} />
    </SimpleGrid>
  );
}
