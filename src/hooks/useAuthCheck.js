import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localUser = localStorage?.getItem("user");
    const localToken = localStorage?.getItem("accessToken");

    if (localUser && localToken) {
      const user = JSON.parse(localUser);
      if (user?.email) {
        dispatch(userLoggedIn({ user, accessToken: localToken }));
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
