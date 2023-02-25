import { Button, Stack } from "@mantine/core";
import { FaArrowUp, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ServicePrice({ cost, id }) {
  return (
    <Stack className="absolute top-5 right-5 items-end ">
      <Button variant="light" compact rightIcon={<FaDollarSign size={18} />}>
        {cost}
      </Button>
      <Button component={Link} to={`/services/${id}`} variant="light" compact rightIcon={<FaArrowUp size={18} />}>
        Details
      </Button>
    </Stack>
  );
}
