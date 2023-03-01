import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";

function Protected({ children }) {
  const loggedIn = useAuth();
  const { pathname } = useLocation();
  console.log("🚀 ~ file: Protected.jsx:7 ~ Protected ~ pathname:", pathname)
  if (loggedIn) {
    return children;
  }
  return <Navigate to="/authentication" state={{ from: pathname }} replace />;
}

export default Protected;
