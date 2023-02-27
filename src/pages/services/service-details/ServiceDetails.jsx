import { Divider, Stack } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Topper from "../../../components/shared/Topper";
import { useGetReviewsQuery } from "../../../features/reviews/reviewsApi";
import { setServiceId } from "../../../features/services/servicesSlice";
import useServiceId from "../../../hooks/services/useServiceId";
import useSetPageTitle from "../../../hooks/shared/useSetPageTitle";

import Reviews from "../../reviews/reviews-in-services/Reviews";
import Details from "./details/Details";
import Sidebar from "./sidebar/Sidebar";

export default function ServiceDetails() {
  useSetPageTitle("Service Details");
  const { id } = useParams();
  const dispatch = useDispatch();

  // setting service id to the store;
  useEffect(() => {
    dispatch(setServiceId(id));
  }, [id, dispatch]);
  const serviceId = useServiceId();
  const { data: reviews, refetch } = useGetReviewsQuery({ serviceId });

  return (
    <div className=" flex flex-col gap-4 sm:gap-8">
      <Topper />
      <Stack spacing={75} className="px-4 mb-10">
        <div className="gap-10 sm:flex-row flex-col-reverse flex">
          <Sidebar refetch={refetch} />
          <Divider orientation="vertical" className="sm:flex hidden" />
          <Details />
          <Reviews extra="hidden xl:flex" reviews={reviews} />
        </div>
        <Reviews extra="xl:hidden" reviews={reviews} />
      </Stack>
    </div>
  );
}
