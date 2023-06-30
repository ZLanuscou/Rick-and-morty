import React from "react"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
export default function Detail() {

    const {id} = useParams();
const [character, setCharacter] = useState({})
useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
 const StBod = styled.div`
 display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;
const ImgDiv = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;
 return (
    
    <div>
      <h1>¡Bienvenido! Este es el personaje:</h1>
      {character.name ? (
        <StBod>
            <ImgDiv>
        <img src={character.image} alt="" />
      </ImgDiv>
          <h2>{character.name}</h2>
          <h2>{character.status}</h2>
          <h2>{character.species}</h2>
          <h2>{character.gender}</h2>
          <h2>{character.origin.name}</h2>
        </StBod>
      ) : (
        <h2>Cargando...</h2>
      )}
      
    </div>
    
  );
}
