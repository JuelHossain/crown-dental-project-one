/* eslint-disable no-underscore-dangle */
import { Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { useGetServicesQuery } from "../../../../../features/services/servicesApi";
import useServiceId from "../../../../../hooks/services/useServiceId";

export default function OtherService() {
  const serviceId = useServiceId();
  const { data: servicesData } = useGetServicesQuery({ page: 0, size: 6 });
  const services = servicesData?.map((s) => {
    const { name, _id } = s;
    return (
      s._id === serviceId || (
        <Text
          className="uppercase  bg-main-5/10 px-4 py-2 rounded underline-offset-4"
          component={Link}
          key={_id}
          to={`/services/${_id}`}
        >
          {name}
        </Text>
      )
    );
  });
  return (
    <Stack className="hidden sm:flex">
      <Title order={4}> Checkout More Services</Title>
      {services}
    </Stack>
  );
}
