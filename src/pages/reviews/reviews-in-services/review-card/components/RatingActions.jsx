import { Badge, Group, Stack } from "@mantine/core";
import { Link, useMatch } from "react-router-dom";
import Loading from "../../../../../components/shared/Loading";
import { useGetServiceQuery } from "../../../../../features/services/servicesApi";
import useAuth from "../../../../../hooks/auth/useAuth";

import DeleteRating from "./DeleteRating";
import UpdateRating from "./UpdateRating";

export default function RatingActions({ serviceId, _id }) {
  const { data, isLoading } = useGetServiceQuery(serviceId) || {};
  const { name } = data || {};
  const user = useAuth();
  const inMyReviews = useMatch("/dashboard/my-reviews");
  return (
    user &&
    inMyReviews && (
      <Stack className="">
        <Badge radius={0} size="lg" className="cursor-pointer" component={Link} to={`/services/${serviceId}`}>
          {isLoading ? <Loading /> : `for ${name}` || "Doesn't Exist"}
        </Badge>
        <Group>
          <UpdateRating id={serviceId} name={name} />
          <DeleteRating id={_id} name={name} />
        </Group>
      </Stack>
    )
  );
}
