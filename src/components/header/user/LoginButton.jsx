import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <Button component={Link} to="/authentication" className=" h-8">
      Login
    </Button>
  );
}
