import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AdminProtected from "./pages/Auth/AdminProtected";
import Auth from "./pages/Auth/Auth";
import Protected from "./pages/Auth/Protected";
import Unprotected from "./pages/Auth/Unprotected";
import Dashboard, { linksForAdmin, linksForUser } from "./pages/dashboard/Dashboard";

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
        element: (
          <Unprotected>
            <Auth />
          </Unprotected>
        ),
        path: "authentication",
      },
      {
        element: (
          <Protected>
            <Dashboard />
          </Protected>
        ),
        path: "/dashboard",
        children: [
          ...linksForUser.map(({ element, link }) => ({ element, path: link })),
          ...linksForAdmin.map(({ element, link }) => ({ element, path: link })),
          {
            element: <AdminProtected />,
            children: [{}],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
export default router;
