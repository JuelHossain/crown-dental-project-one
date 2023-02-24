import { Burger, createStyles, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
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
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = navlinks.map((link) => <Menu.Item key={link}>{link.label}</Menu.Item>);
  return (
    <Menu className="flex-1 sm:hidden">
      <Menu.Target>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
