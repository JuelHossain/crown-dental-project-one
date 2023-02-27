import { Button, Center, Stack } from "@mantine/core";
import { Link, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";

export default function Dashboard() {
  const linksForAdmin = [
    {
      label: "profile",
      link: "/dashboard",
    },
    {
      label: "Manage Services",
      link: "/manage-services",
    },
    {
      label: "Manage Schedule",
      link: "/manage-schedules",
    },
    {
      label: "My Appointments",
      link: "/dashboard/my-appointments",
    },
  ];
  const linksForUser = [
    {
      label: "profile",
      link: "/dashboard",
    },
    {
      label: "Add A Service",
      link: "/dashboard/add-service",
    },
    {
      label: "My Reviews",
      link: "/dashboard/my-reviews",
    },
  ];
  const { admin } = useAuth() || {};
  const linkToShow = admin ? linksForAdmin : linksForUser;
  const { pathname } = useLocation();
  const dashboardLinks = linkToShow.map(({ label, link }) => (
    <Button variant={pathname === link ? "filled" : "light"} component={Link} to={link} key={label}>
      {label}
    </Button>
  ));
  return (
    <Stack>
      <Center className="gap-2 p-2 sm:p-4 bg-main-2 dark:bg-main-9/50">{dashboardLinks}</Center>
      <Outlet />
    </Stack>
  );
}
