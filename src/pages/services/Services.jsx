/* eslint-disable no-underscore-dangle */
import { Group } from "@mantine/core";
import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";
import Heading from "./components/Heading";
import SeeAllButton from "./components/SeeAllButton";
import ServiceList from "./components/ServiceList";

export default function Services(props) {
  useSetPageTitle("Services");
  const { admin } = useAuth() || {};
  const inDash = useLocation()?.pathname.includes("dashboard");

  return (
    <Group noWrap className={` flex-col bg-gradient-to-tl from-main-9 via-sec-0/5 min-h-screen pb-20 sm:pb-40 `}>
      {(admin && inDash) || <Heading />}
      <ServiceList {...props} />
      <SeeAllButton {...props} />
    </Group>
  );
}
