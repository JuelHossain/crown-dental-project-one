import { Divider, Stack } from "@mantine/core";
import Loading from "../../../components/shared/Loading";
import { useGetServiceReviewsQuery } from "../../../features/reviews/reviewsApi";
import useServiceId from "../../../hooks/services/useServiceId";
import Reviews from "../../reviews/reviews-in-services/Reviews";
import Details from "./details/Details";
import Sidebar from "./sidebar/Sidebar";

export default function MainContent() {
  const serviceId = useServiceId();
  const { data: reviews, isLoading } = useGetServiceReviewsQuery(serviceId);

  return (
    <Stack spacing={75} className="px-4 mb-10">
      <Loading visible={isLoading} />
      <div className="gap-10 sm:flex-row flex-col-reverse flex">
        <Sidebar />
        <Divider orientation="vertical" className="sm:flex hidden" />
        <Details />
        <Reviews extra="hidden xl:flex" reviews={reviews} />
      </div>
      <Reviews extra="xl:hidden" reviews={reviews} />
    </Stack>
  );
}
