import { Button } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import navlinks from "./navlinks";

export default function useNavItems(props) {
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  const items = navlinks.map(({ label, link }) => {
    const match = pathname === link || (path.includes(link) && pathname !== "/");

    return (
      <Button
        {...props}
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
  return items;
}
