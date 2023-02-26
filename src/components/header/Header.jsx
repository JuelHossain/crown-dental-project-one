import { Flex, Group, Header } from "@mantine/core";
import ToggleTheme from "../shared/ToggleTheme";
import Links from "./links/Links";
import MobileLinks from "./links/MobileLinks";
import Logo from "./logo/Logo";
import User from "./user/User";

export default function AppHeader() {
  return (
    <Header className=" top-0 border-none sz-10001 sticky ">
      <Flex align="center" className="justify-between">
        <Group noWrap className="basis-9/12 xs:basis-3/6 sm:basis-2/6 xl:basis-1/6 bg-main-6 pt-2 gap-1 px-2 sm:px-4">
          <MobileLinks />
          <Logo />
        </Group>
        <Group className="basis-2/9 xs:basis-3/6 sm:basis-4/6 xl:basis-5/6 justify-end items-end flex px-2 sm:px-4">
          <Links />
          <div className="hidden xs:block">
            <User />
          </div>
          <ToggleTheme />
        </Group>
      </Flex>
    </Header>
  );
}
