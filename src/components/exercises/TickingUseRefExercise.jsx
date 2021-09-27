import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

const TickingUseRefExercise = () => {
  // This is a stopwatch example.
  const [milliSeconds, setMilliSeconds] = useState(0)
  const [ticking, setTicking] = useState(false)

  // 1. Get the ref for the CURRENT INSTANCE of the component.
  const interval = useRef(null)

  useEffect(() => {
    if (ticking) {
      // 2. Update the value via ".current"
      interval.current = setInterval(() => {
        setMilliSeconds(ms => ms +1)
      }, 1)

      return () => clearInterval(interval.current)
    } else {
      // 3. Access the value via ".current"
      interval.current && clearInterval(interval.current)
    }

  }, [ticking])


  return (
    <div>
      <h1>{milliSeconds}</h1>
      <Button onClick={() => setTicking(c => !c)}>
        {milliSeconds === 0 ? "Start" : ticking ? "Pause" : "Resume"}
      </Button>
    </div>
  );
};

export default TickingUseRefExercise;