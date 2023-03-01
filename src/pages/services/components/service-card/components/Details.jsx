import { createStyles, Text } from "@mantine/core";
import { useLocation } from "react-router-dom";
import useAuth from "../../../../../hooks/auth/useAuth";

import ServiceActions from "../../../service-details/sidebar/components/ServiceActions";

const useStyles = createStyles((theme) => ({
  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function Details({ name, short, _id }) {
  const { classes, cx } = useStyles();
  const { admin } = useAuth() || {};
  const inDash = useLocation()?.pathname.includes("dashboard");
  return (
    <>
      <Text size="lg" weight={500} className={cx(classes.cardTitle, "uppercase")} mt="md">
        {name}
      </Text>
      {admin && inDash ? (
        <ServiceActions serviceId={_id} />
      ) : (
        <Text size="sm" color="dimmed" mt="sm">
          {short}
        </Text>
      )}
    </>
  );
}
