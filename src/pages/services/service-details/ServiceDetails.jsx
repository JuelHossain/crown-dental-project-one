import { Divider, Stack } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Topper from "../../../components/shared/Topper";
import { setServiceId } from "../../../features/services/servicesSlice";
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

  return (
    <div className=" flex flex-col gap-4 sm:gap-8">
      <Topper />
      <Stack spacing={75} className="px-4">
        <div className="space-y-5 gap-10 sm:flex-row flex-col-reverse flex">
          <Sidebar />
          <Divider orientation="vertical" className="sm:flex hidden" />
          <Details />
        </div>
        <Reviews />
      </Stack>
    </div>
  );
}
