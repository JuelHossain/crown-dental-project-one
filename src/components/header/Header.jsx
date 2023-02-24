import { createStyles, Flex, Group, Header } from "@mantine/core";
import ToggleTheme from "../shared/ToggleTheme";
import Links from "./links/Links";
import MobileLinks from "./links/MobileLinks";
import Logo from "./logo/Logo";
import User from "./user/User";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,
    paddingLeft: 10,
    paddingRight: 10,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function AppHeader() {
  const { classes, cx } = useStyles();

  return (
    <Header className="bg-transparent pt-4 fixed top-0 border-none">
      <Flex align="center" className={classes.inner}>
        <MobileLinks />
        <Links />
        <Logo />

        <Group spacing={6} className={cx(classes.social, "flex-1")} position="right" noWrap>
          <User />
          <ToggleTheme />
        </Group>
      </Flex>
    </Header>
  );
}
