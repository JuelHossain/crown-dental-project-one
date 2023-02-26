/* eslint-disable no-underscore-dangle */
import { Divider, Group } from "@mantine/core";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";
import Heading from "./components/Heading";
import SeeAllButton from "./components/SeeAllButton";
import ServiceList from "./components/ServiceList";

export default function Services(props) {
  useSetPageTitle("Services");

  return (
    <Group noWrap className={` flex-col bg-gradient-to-tl from-main-9 via-sec-0/5  `}>
      <Heading />
      <ServiceList {...props} />
      <SeeAllButton {...props} />
    </Group>
  );
}
