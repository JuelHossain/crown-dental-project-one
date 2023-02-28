import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Topper from "../../../components/shared/Topper";
import { setServiceId } from "../../../features/services/servicesSlice";
import useSetPageTitle from "../../../hooks/shared/useSetPageTitle";

import MainContent from "./MainContent";

export default function ServiceDetails() {
  useSetPageTitle("Service Details");
  const { id } = useParams();
  const dispatch = useDispatch();

  // setting service id to the store;
  useEffect(() => {
    dispatch(setServiceId(id));
    return () => dispatch(setServiceId(undefined));
  }, [id, dispatch]);

  return (
    <div className=" flex flex-col gap-4 sm:gap-8">
      <Topper />
      <MainContent />
    </div>
  );
}
