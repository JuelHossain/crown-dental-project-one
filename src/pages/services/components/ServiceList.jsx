/* eslint-disable no-underscore-dangle */
import { LoadingOverlay, SimpleGrid } from "@mantine/core";
import { useLocation } from "react-router-dom";
import { useGetServicesQuery } from "../../../features/services/servicesApi";

import ServiceCard from "./service-card/ServiceCard";

export default function ServiceList() {
  const { data, isLoading } = useGetServicesQuery({});
  const services = data?.map((service) => <ServiceCard key={Math.random()} {...service} />);
  const inDash = useLocation()?.pathname.includes("dashboard");
  return (
    <SimpleGrid
      cols={inDash ? 6 : 5}
      breakpoints={[
        { maxWidth: "xl", cols: inDash ? 5 : 4 },
        { maxWidth: "lg", cols: inDash ? 4 : 3 },
        { maxWidth: "md", cols: inDash ? 3 : 2 },
        { maxWidth: "sm", cols: inDash ? 2 : 1 },
        { maxWidth: "xs", cols: 1 },
      ]}
      className="p-2 sm:p-4 grid w-full"
    >
      {services}
      <LoadingOverlay visible={isLoading} />
    </SimpleGrid>
  );
}
