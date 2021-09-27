import React, { useEffect, useRef, useState } from "react";
import { Button} from "react-bootstrap";

const UseRefExercise2 = () => {
  const [count, setCount] = useState(0)
  const prevCount = useRef(0)

  useEffect(() => {
    // This runs every time AFTER Counter is rendered.
    prevCount.current = count

  }, [count])


  return (
    <div>
      <div className="flex flex-col justify-center items-center m-8">
        <div>
          Prev: {prevCount.current}, Count: {count}
        </div>
        <div>
          <Button
            className="bg-purple-700 px-6 text-white rounded-md hover:bg-purple-500"
            onClick={() => setCount(c => c + 1)}
          >
            +1
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UseRefExercise2;