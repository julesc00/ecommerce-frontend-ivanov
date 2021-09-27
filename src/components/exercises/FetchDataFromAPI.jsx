import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap"

const FetchDataFromApi = () => {
  const [state, setState] = useState({
    color: "navy",
    user: null
  })
  const url = 'https://randomuser.me/api/'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setState({...data, user: data.results[0]}))
  }, [])

  useEffect(() => {
    document.body.style.background = state.color
    document.body.style.color = "white"

    const handleEnterButton = event => (event.keyCode === 13) ? setState({ ...state, color: "red"}) : state.color

    window.addEventListener("keydown", handleEnterButton)

    return () => window.removeEventListener("keydown", handleEnterButton)

  }, [state, state.color])

  const changeColor = () => setState({...state, color: "gold"})

  return (
    <div>
      <h1>My React App Practice</h1>
      <Button onClick={changeColor}>Get Color</Button>
      <br/><br/>
      Current user: <pre>{JSON.stringify(state.user, null, 2)}</pre>
    </div>
  );
};

export default FetchDataFromApi;