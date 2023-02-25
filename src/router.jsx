import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Auth from "./pages/Auth/Auth";
import Protected from "./pages/Auth/Protected";

import ErrorPage from "./pages/errors/ErrorPage";
import Home from "./pages/home/Home";
import ServiceDetails from "./pages/services/service-details/ServiceDetails";
import Services from "./pages/services/Services";

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
        element: <Services />,
        path: "/services",
      },
      {
        path: "services/:id",
        element: <ServiceDetails />,
      },
      {
        element: <Auth />,
        path: "authentication",
      },
      {
        element: <Protected />,
        children: [],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
export default router;
