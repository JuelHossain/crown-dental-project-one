/* eslint-disable no-underscore-dangle */
import { LoadingOverlay, SimpleGrid } from "@mantine/core";
import { useGetServicesQuery } from "../../../features/services/servicesApi";

import ServiceCard from "./service-card/ServiceCard";

export default function ServiceList({ page, size }) {
  const { data, isLoading } = useGetServicesQuery({ page, size });
  console.log(data);

  const services = data?.map((service) => <ServiceCard key={Math.random()} {...service} />);

  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: "xl", cols: 3 },
        { maxWidth: "md", cols: 2 },
        { maxWidth: "sm", cols: 1 },
      ]}
    >
      {services}
      <LoadingOverlay visible={isLoading} />
    </SimpleGrid>
  );
}
