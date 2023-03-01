import { Button, Center, Stack } from "@mantine/core";
import { Link, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";
import AddServicePage from "./add-service/AddServicePage";
import MyAppointments from "./my-appointments/MyAppointments";
import MyReviews from "./my-reviews/MyReviews";
import Profile from "./profile/Profile";

export const linksForAdmin = [
  {
    label: "profile",
    link: "/dashboard",
    element: <Profile />,
  },
  {
    label: "Add A Service",
    link: "/dashboard/add-service",
    element: <AddServicePage />,
  },
  {
    label: "Manage Services",
    link: "/dashboard/manage-services",
    element: <MyAppointments />,
  },
  {
    label: "Manage Schedule",
    link: "/dashboard/manage-schedules",
    element: <MyAppointments />,
  },
];
export const linksForUser = [
  {
    label: "profile",
    link: "/dashboard",
    element: <Profile />,
  },
  {
    label: "My Reviews",
    link: "/dashboard/my-reviews",
    element: <MyReviews />,
  },
  {
    label: "My Appointments",
    link: "/dashboard/my-appointments",
    element: <MyAppointments />,
  },
];
export default function Dashboard() {
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
