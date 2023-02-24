import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Auth from "./pages/Auth/Auth";

import ErrorPage from "./pages/errors/ErrorPage";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Auth />,
        path: "/authentication",
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
export default router;
