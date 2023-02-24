/* eslint-disable consistent-return */
import { useCallback, useEffect, useState } from "react";

export default function useTimer(initial) {
  const [timer, setTimer] = useState(initial || 30);

  const decrementTimer = useCallback(() => {
    setTimer((oldTimer) => oldTimer - 1);
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      return;
    }
    const timeoutFunction = setInterval(decrementTimer, 1000);
    return () => clearInterval(timeoutFunction);
  }, [decrementTimer, timer]);
  return timer;
}
