/* eslint-disable no-underscore-dangle */
import Loading from "../../../components/shared/Loading";
import { useGetReviewsQuery, useGetUserReviewsQuery } from "../../../features/reviews/reviewsApi";
import useAuth from "../../../hooks/auth/useAuth";
import ReviewCard from "../../reviews/reviews-in-services/review-card/ReviewCard";

export default function DashboardReviews() {
  const { email, admin } = useAuth() || {};
  const { data: userReviews, isLoading: userReviewsLoading } = useGetUserReviewsQuery(email, {
    refetchOnMountOrArgChange: true,
  });
  const { data: allReviews, isLoading: allReviewsLoading } = useGetReviewsQuery(
    {},
    { refetchOnMountOrArgChange: true },
  );
  const reviewsToShow = admin ? allReviews : userReviews;
  console.log("allReviews :>> ", allReviews);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-2 sm:gap-4 ">
      {reviewsToShow?.map((review) => (
        <ReviewCard key={review._id} {...review} />
      ))}
      <Loading visible={userReviewsLoading || allReviewsLoading} />
    </div>
  );
}
