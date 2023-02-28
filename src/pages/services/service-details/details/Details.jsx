import { LoadingOverlay, Stack, Title } from "@mantine/core";
import { useGetServiceQuery } from "../../../../features/services/servicesApi";
import useServiceId from "../../../../hooks/services/useServiceId";
import Description from "./Description";

export default function Details() {
  const serviceId = useServiceId();
  console.log("serviceId :>> ", serviceId);
  const { data: { name, description } = {}, isLoading } = useGetServiceQuery(serviceId, { skip: !serviceId }) || {};

  return (
    <Stack className="md:basis-2/3 sm:basis-1/2">
      <Title>{name}</Title>
      <Description des={description} />
      <LoadingOverlay visible={isLoading} />
    </Stack>
  );
}
