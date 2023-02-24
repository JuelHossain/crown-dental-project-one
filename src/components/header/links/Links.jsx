import { Button, Group } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import navlinks from "./navlinks";

export default function Links() {
  const { pathname } = useLocation();
  const path = pathname.slice(1);

  const items = navlinks.map(({ label, link }) => {
    const match = pathname === link || (path.includes(link) && pathname !== "/");

    return (
      <Button
        color={match || "neu"}
        variant={match ? "light" : "subtle"}
        component={Link}
        key={label}
        to={link}
        className="h-8 pt-0.5"
      >
        {label}
      </Button>
    );
  });
  return (
    <Group className="hidden sm:flex flex-1" spacing={5}>
      {items}
    </Group>
  );
}
