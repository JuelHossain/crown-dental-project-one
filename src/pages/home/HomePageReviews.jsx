import Loading from "../../components/shared/Loading";
import { useGetReviewsQuery } from "../../features/reviews/reviewsApi";
import Reviews from "../reviews/reviews-in-services/Reviews";

export default function HomePageReviews() {
  const { data, isLoading } = useGetReviewsQuery({}, { refetchOnMountOrArgChange: true });

  return isLoading ? <Loading /> : <Reviews reviews={data} home />;
}
