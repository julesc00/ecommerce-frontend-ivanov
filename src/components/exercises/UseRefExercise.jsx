import React, { useRef } from "react";
import { Button } from "react-bootstrap";

const UseRefExercise = () => {
  const inputRef = useRef(null)

  const handleClearInput = () => {
    inputRef.current.value = ""
    inputRef.current.focus()
  }


  return (
    <div>
      <form action="">
        <input type="text" ref={inputRef}/>
        <Button type="button" onClick={handleClearInput}>Clear Input</Button>
      </form>
    </div>
  );
};

export default UseRefExercise;