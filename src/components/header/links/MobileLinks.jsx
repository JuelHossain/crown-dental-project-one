/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Burger, Button, createStyles, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, useLocation } from "react-router-dom";
import User from "../user/User";
import navlinks from "./navlinks";

const useStyles = createStyles((theme) => ({
  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function MobileLinks() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const { pathname } = useLocation();
  const path = pathname.slice(1);

  const items = navlinks.map(({ label, link }) => {
    const match = pathname === link || (path.includes(link) && pathname !== "/");

    return (
      <Button
        onClick={close}
        color={match || "neu"}
        variant={match ? "filled" : "light"}
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
    <Stack className="sm:hidden">
      <Group>
        <Burger color="white" opened={opened} onClick={toggle} size="sm" className="mb-2" />
      </Group>
      <Drawer
        zIndex={2000}
        opened={opened}
        onClose={close}
        title={
          <div onClick={close}>
            <User />
          </div>
        }
        padding="xl"
        size="sm"
      >
        <Stack>{items}</Stack>
      </Drawer>
    </Stack>
  );
}
