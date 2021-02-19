import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
// Write your Character component here
const kf = keyframes`
  100% {
    opacity: 1;
  }
`;
const Name = styled.div`
  box-sizing: border-box;
  border-radius: 3px;
  width: 60vw;
  background-color: #1b262c;
  color: white;
  margin: 0px;
  padding: 20px;
  border: 1px solid #3282b8;
`;
const Info = styled.div`
  margin: 0px;
  padding: 10px;
  box-sizing: border-box;
  opacity: 0%;
  justify-content: space-between;
  border-radius: 3px;
  background-color: #0f4c75;
  width: 60vw;
  color: white;
  display: ${(props) => (props.display === props.displayId ? "block" : "none")};

  /* &:hover {
    transform: scale(1.3);
    padding: 5%;
    border-radius: 3px;
    transition: all 0.2s ease-in-out; 
  }*/

  animation: ${kf} 0.3s ease-in-out forwards;
`;

export default function Character(props) {
  const { character, displayId, display, action } = props;

  return (
    <div>
      <Name onClick={() => action(displayId)}>{character.name}</Name>
      <Info display={display} displayId={displayId}>
        <p>Gender: {character.gender}</p>
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
        <p>Birt Year: {character.birth_year}</p>
        <p>Eye Color: {character.eye_color}</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Skin Color: {character.skin_color}</p>
      </Info>
    </div>
  );
}
