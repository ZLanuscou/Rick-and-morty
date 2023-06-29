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
background-color: white;
`;
 return (
    
    <div>
      <h1>¡Bienvenido! Este es el personaje:</h1>
      {character.name ? (
        <StBod>
          <h2>{character.name}</h2>
          <h2>{character.status}</h2>
          <h2>{character.species}</h2>
          <h2>{character.gender}</h2>
          <h2>{character.origin.name}</h2>
        </StBod>
      ) : (
        <h2>Cargando...</h2>
      )}
      <div>
        <img src={character.image} alt="" />
      </div>
    </div>
    
  );
}
