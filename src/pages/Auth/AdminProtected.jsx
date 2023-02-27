import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";

function AdminProtected({ children }) {
  const { admin } = useAuth() || {};
  if (admin) {
    return children;
  }
  return (
    <div>
      <h2>Only Admin Can Access this Page</h2>
      <p>if you are an admin please login with your credentials.</p>
      <Button component={Link} to="/authentication">
        Login
      </Button>
      <Button component={Link} to="/">
        Home
      </Button>
    </div>
  );
}

export default AdminProtected;
