/* eslint-disable react-hooks/rules-of-hooks */
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import AppHeader from "./components/header/Header";
import HeaderTop from "./components/header/HeaderTop";
import Loading from "./components/shared/Loading";
import useAuthCheck from "./hooks/auth/useAuthCheck";

export default function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <Loading />
  ) : (
    <ModalsProvider>
      <NotificationsProvider>
        <div className="min-h-screen flex justify-between flex-col z-20">
          <HeaderTop />
          <AppHeader />
          {/* {(!home || !auth) && <HeaderBack />} */}
          <div className=" flex flex-col flex-1 z-20 ">
            <div className="flex-1">
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      </NotificationsProvider>
    </ModalsProvider>
  );
}
