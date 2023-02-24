import { createStyles, Group } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import navlinks from "./navlinks";

const useStyles = createStyles((theme) => ({
  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
    },
  },
}));

export default function Links() {
  const { classes, cx } = useStyles();
  const { pathname } = useLocation();

  const items = navlinks.map(({ label, link }) => (
    <Link
      key={label}
      to={link}
      className={cx(classes.link, {
        [classes.linkActive]: pathname === link || (pathname.includes(link) && pathname !== "/"),
      })}
    >
      {label}
    </Link>
  ));
  return (
    <Group className={cx(classes.links, "flex-1")} spacing={5}>
      {items}
    </Group>
  );
}
