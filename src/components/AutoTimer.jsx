import React, { useState, useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const AutoTimer = () => {

  let [count, setCount] = useState(0);
  let [delay, setDelay] = useState(1000);

  useInterval(() => {
    setCount(count + 1);
  }, delay);

  const handleDelayChange = (e) => {
    setDelay(Number(e.target.value));
  };

  return (
    <div className="auto-timer">
      <div>Change Interval here (ms)</div>
      <input value={delay} onChange={handleDelayChange} />
      <div className="auto-timer-value">{count}</div>
    </div>
  );
};

export default AutoTimer;