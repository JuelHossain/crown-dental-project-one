import { useLocation, useNavigate } from "react-router-dom";

export default function useRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  return (n = "/") => {
    if (location?.state?.from) {
      navigate(location.state.form);
    } else {
      navigate(n);
    }
  };
}
