/* eslint-disable consistent-return */
import { useCallback, useEffect, useState } from "react";
import useVerification from "../pages/Auth/context/hooks/useVerification";

export default function useTimer(initial, { reset } = {}) {
  const [timer, setTimer] = useState(initial || 30);
  const verification = useVerification();

  const decrementTimer = useCallback(() => {
    setTimer((oldTimer) => oldTimer - 1);
  }, []);

  useEffect(() => {
    if (timer <= 0 && reset) {
      (async () => {
        await verification();
      })();
      setTimer(initial || 30);
    } else if (timer <= 0) {
      return;
    }
    const timeoutFunction = setInterval(decrementTimer, 1000);
    return () => clearInterval(timeoutFunction);
  }, [decrementTimer, timer, setTimer, initial, reset, verification]);
  return timer;
}
