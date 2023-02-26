import { Group } from "@mantine/core";
import { Link } from "react-router-dom";
import CrownDental from "../../icons/CrownDental";

export default function Logo() {
  return (
    <Group component={Link} to="/" noWrap className="flex-1 sm:justify-center" spacing={0}>
      <CrownDental className="w-7 h-7 sm:w-10 sm:h-10 mb-4" />
      <h2 className="font-main sm:text-2xl text-from-main text-white truncate">Crown Dental</h2>
      {/* <h2 className="font-main  sm:text-3xl text-sec-6 -ml-0.5 mt-1">Dental</h2> */}
    </Group>
  );
}
