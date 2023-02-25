import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSelector";

export default function useAuth() {
  const user = useSelector(selectUser);
  if (user) {
    return user;
  }
  return null;
}
