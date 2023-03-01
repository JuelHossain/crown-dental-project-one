import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetServiceQuery } from "../../../../features/services/servicesApi";
import { setServiceId } from "../../../../features/services/servicesSlice";
import CardPlaceHolder from "./components/CardPlaceHolder";
import CardWrapper from "./components/CardWrapper";
import Details from "./components/Details";
import ServiceImage from "./components/Image";
import ServicePrice from "./components/ServicePrice";

export default function ServiceCard({ _id }) {
  const { data: service, isLoading } = useGetServiceQuery(_id);
  const { name, short, cost, imageLink } = service || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setServiceId(_id));
    return () => dispatch(setServiceId(undefined));
  }, [_id, dispatch]);

  return isLoading ? (
    <CardPlaceHolder />
  ) : (
    <CardWrapper id={_id}>
      <ServiceImage imageLink={imageLink} />
      <ServicePrice cost={cost} id={_id} />
      <Details name={name} short={short} _id={_id} />
    </CardWrapper>
  );
}
