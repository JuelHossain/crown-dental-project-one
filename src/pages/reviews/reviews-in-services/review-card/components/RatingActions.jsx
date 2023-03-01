import { Badge, Group, Stack } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import Loading from "../../../../../components/shared/Loading";
import { useGetServiceQuery } from "../../../../../features/services/servicesApi";
import useAuth from "../../../../../hooks/auth/useAuth";

import DeleteRating from "./DeleteRating";
import UpdateRating from "./UpdateRating";

export default function RatingActions({ serviceId, _id }) {
  const { data, isLoading } = useGetServiceQuery(serviceId, { skip: !serviceId }) || {};
  const { name } = data || {};
  const user = useAuth();
  const inDash = useLocation().pathname.includes("dashboard");
  return (
    user &&
    inDash && (
      <Stack className="">
        <Badge radius={0} size="lg" className="cursor-pointer" component={Link} to={`/services/${serviceId}`}>
          {isLoading ? <Loading /> : `for ${name}` || "Doesn't Exist"}
        </Badge>
        <Group>
          <UpdateRating id={_id} name={name} />
          <DeleteRating id={_id} name={name} />
        </Group>
      </Stack>
    )
  );
}
