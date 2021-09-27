import React, {useEffect, useState} from "react";
import { Button } from "react-bootstrap";

const Exercise = () => {
  const [color, setColor] = useState("navy")
  const [state, setState] = useState({
    language: "React!!!",
    years: 0,
  })

  useEffect(() => {
    document.body.style.background = color
    document.body.style.color = "white"
  }, [color])

  const changeColor = () => setColor("gold")

  const changeLanguage = () => setState({ ...state, language: "React Hooks!" })

  const addYear = () => {
    setState(prev => {
      return {
        ...prev,
        years: prev + 1
      }
    })
  }


  return (
    <div>
      <div>
        <h1 onClick={changeLanguage}>I've learned {state.language} for {state.years} years.</h1>
        <Button onClick={addYear}>
          Add year
        </Button>
      </div>

      <div>
        <h1>Changing color</h1>
        <Button onClick={changeColor}>
          Change color
        </Button>
      </div>

    </div>
  );
};

export default Exercise;