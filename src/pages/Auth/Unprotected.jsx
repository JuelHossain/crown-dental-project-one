import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";

function Unprotected({ children }) {
  const loggedIn = useAuth();
  const { state } = useLocation();
  if (loggedIn) {
    return <Navigate to={state?.from || "/"} />;
  }
  return children;
}

export default Unprotected;
