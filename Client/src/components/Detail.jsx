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
    axios(`http://localhost:3000/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
 const Container = styled.div`
 display: flex;
 align-items: center;
 background: rgba(255, 255, 255, 0.8);
 border-radius: 8px;
 box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
 padding: 20px;
 max-width: 700px;
 margin: 0 auto;
 `;
 const StBod = styled.div`
 display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    margin-right: 80px;
    margin-left: 10px;
`;
const ImgDiv = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
`;
const Imagen = styled.img`
width: 400px;
    height: 400px;
    border-radius: 200px;
    
`;
 return (
    
    <div>
      <h1>¡Bienvenido! Este es el personaje:</h1>
      {character.name ? (
        <Container>
          <StBod> 
            
          <h2>{"Nombre: "+character.name}</h2>
          <h2>{"Estado: "+character.status}</h2>
          <h2>{"Especie: "+character.species}</h2>
          <h2>{"Genero: "+character.gender}</h2>
          <h2>{"Origen: "+character.origin.name}</h2>
          </StBod>
          <ImgDiv>
          
          <Imagen src={character.image} alt="" />
          </ImgDiv>
         
        </Container>
      ) : (
        <h2>Cargando...</h2>
      )}
      
    </div>
    
  );
}
