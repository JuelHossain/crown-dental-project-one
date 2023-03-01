import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AdminProtected from "./pages/Auth/AdminProtected";
import Auth from "./pages/Auth/Auth";
import Protected from "./pages/Auth/Protected";
import Unprotected from "./pages/Auth/Unprotected";
import AddServicePage from "./pages/dashboard/add-service/AddServicePage";
import Dashboard from "./pages/dashboard/Dashboard";
import MyReviews from "./pages/dashboard/my-reviews/MyReviews";
import Profile from "./pages/dashboard/profile/Profile";

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
          {
            element: <Profile />,
            index: true,
          },
          {
            element: <AddServicePage />,
            path: "add-service",
          },
          {
            element: <MyReviews />,
            path: "my-reviews",
          },
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
