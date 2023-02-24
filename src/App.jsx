/* eslint-disable react-hooks/rules-of-hooks */
import { Outlet, useMatch } from "react-router-dom";
import AppHeader from "./components/header/Header";
import HeaderBack from "./components/header/HeaderBack";

export default function App() {
  const home = useMatch("/");
  const auth = useMatch("/authentication");

  return (
    <div className="min-h-screen flex justify-between flex-col">
      <AppHeader />
      {!home || (auth && <HeaderBack />)}
      <div className=" flex flex-col">
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
