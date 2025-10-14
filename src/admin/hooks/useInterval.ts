import { useEffect, useRef } from 'react';

type Callback = () => void;

export default function useInterval(callback: Callback, state: any, delay: number) {
  const savedCallback = useRef<Callback | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      const callback = savedCallback.current;
      if (callback) callback();
    }
    if (!state) return;
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [state, delay]);
}
