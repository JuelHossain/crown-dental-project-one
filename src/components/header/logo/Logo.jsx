import { Group } from "@mantine/core";
import CrownDental from "../../icons/CrownDental";

export default function Logo() {
  return (
    <Group noWrap className="flex-1 justify-center" spacing={0}>
      <h2 className="font-main sm:text-3xl text-from-main text-sec-6">Crown</h2>
      <CrownDental  className="w-10 h-10 sm:w-14 sm:h-14 mb-4" />
      <h2 className="font-main  sm:text-3xl text-sec-6 -ml-0.5 mt-1">Dental</h2>
    </Group>
  );
}
