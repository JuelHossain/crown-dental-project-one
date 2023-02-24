import { Outlet } from "react-router-dom";
import AppHeader from "./components/header/Header";

export default function App() {
  return (
    <div className="min-h-screen flex justify-between flex-col">
      <AppHeader />
      <div className=" flex flex-col">
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
