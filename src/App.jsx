/* eslint-disable react-hooks/rules-of-hooks */
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
    <div className="min-h-screen flex justify-between flex-col">
      <HeaderTop />
      <AppHeader />
      {/* {(!home || !auth) && <HeaderBack />} */}
      <div className=" flex flex-col flex-1">
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
