import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../features/auth/authApi";
import { selectUser } from "../../features/auth/authSelector";

export default function useAuth() {
  const { email } = useSelector(selectUser) || {};
  const { data: user } = useGetUserQuery(email, { skip: !email });
  if (email && user) {
    return user;
  }
  return null;
}
