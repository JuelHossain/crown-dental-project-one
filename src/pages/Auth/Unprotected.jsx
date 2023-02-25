import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Unprotected({ children }) {
  const loggedIn = useAuth();
  const location = useLocation();
  if (loggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}

export default Unprotected;
