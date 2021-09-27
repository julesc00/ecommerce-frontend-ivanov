import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const UnsubscribeExercise = () => {
  const [color, setColor] = useState("navy")

  useEffect(() => {
    document.body.style.background = color
    document.body.style.color = "white"

    const handleEnterButton = event => (event.keyCode === 13) ? setColor("red") : color

    window.addEventListener("keydown", handleEnterButton)

    return () => window.removeEventListener("keydown", handleEnterButton)

  }, [color])

  const changeColor = () => setColor("gold")


  return (
    <div>
      <h1>React My App</h1>
      <Button onClick={changeColor}>Get Color</Button>
    </div>
  );
};

export default UnsubscribeExercise;