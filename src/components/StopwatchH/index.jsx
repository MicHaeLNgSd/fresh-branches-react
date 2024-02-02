import React, { useEffect, useState } from 'react';
import { addMilliseconds, format as dateFormat } from 'date-fns';

function StopwatchH() {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);
  const [delta, setDelta] = useState(5);

  const timerStart = () => {
    setIsRunning(true);
  };

  const timerStop = () => {
    setIsRunning(false);
  };

  const timerClear = () => {
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
  };

  const timerTick = () => {
    const newDate = addMilliseconds(time, delta);
    setTime(newDate);
  };

  useEffect(() => {
    timerStart();
    return () => {
      timerStop();
    };
  }, []);

  useEffect(() => {
    if (isRunning) {
      setTimeout(timerTick, delta);
    }
  }, [time, isRunning]);

  const timeFormated = dateFormat(time, 'HH:mm:ss:SSS');
  document.title = `Timer ${dateFormat(time, 'HH:mm:ss')}`;
  return (
    <div>
      <h2>Stopwatch:</h2>
      <p>{timeFormated}</p>
      <p>00:00:00.000</p>
      <button onClick={timerStart}>Start</button>
      <button onClick={timerStop}>Stop</button>
      <button onClick={timerClear}>Clear</button>
    </div>
  );
}

export default StopwatchH;
