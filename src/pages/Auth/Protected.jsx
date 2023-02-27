import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";

function Protected({ children }) {
  const loggedIn = useAuth();
  const { pathname } = useLocation();
  if (loggedIn) {
    return children;
  }
  return <Navigate to="/login" state={{ from: pathname }} replace />;
}

export default Protected;
