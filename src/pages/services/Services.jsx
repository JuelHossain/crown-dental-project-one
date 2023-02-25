/* eslint-disable no-underscore-dangle */
import { Divider, Group } from "@mantine/core";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";
import Heading from "./components/Heading";
import SeeAllButton from "./components/SeeAllButton";
import ServiceList from "./components/ServiceList";

export default function Services(props) {
  useSetPageTitle("Services");

  return (
    <Group noWrap className={`xl:items-start  xl:flex-row flex-col mb-5 mt-24 `}>
      <Heading />
      <Divider orientation="vertical" />
      <ServiceList {...props} />
      <SeeAllButton {...props} />
    </Group>
  );
}
