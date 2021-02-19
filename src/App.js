import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import styled, { keyframes } from "styled-components";

const App = () => {
  const [characters, setCharacters] = useState(null);
  const [display, setDisplay] = useState(null);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setCharacters(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeDisplay = (id) => {
    if (display == id) {
      setDisplay(null);
    } else {
      setDisplay(id);
    }
  };

  const MainBox = styled.div`
    position: relative;
    top: 30px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;

    .Header {
      color: white;
    }
  `;
  const Holder = styled.div`
    box-sizing: border-box;
    background: rgba(18, 36, 57, 0.67);
    border-radius: 5px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 80vw;
  `;
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  if (!characters) return <h3>Loading...</h3>;
  return (
    <div className="bg">
      <MainBox className="App">
        <h1 className="Header">Characters</h1>
        <Holder>
          {characters.map((character, i) => {
            return (
              <Character
                action={changeDisplay}
                displayId={i}
                className="info"
                display={display}
                character={character}
              />
            );
          })}
        </Holder>
        ;
      </MainBox>
    </div>
  );
};

export default App;
