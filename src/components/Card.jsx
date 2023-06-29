import React from "react";
import styled from "styled-components";
import { keyframes } from 'styled-components';
import { Link } from "react-router-dom";
import imagen from './assets/imagen.png';
const scaleAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;
const PageBackground = styled.div`
  background-image: url({imagen});
  background-size: auto;
  background-repeat: repeat;
  background-position: center center;
  border-radius: 10px;
`;
const CardContainer = styled.div`
display: inline-block;
flex-direction: column;
aling-items: center;
justify-content: center;
  position: relative;
  max-width: 300px;
  height: 100%;
  margin: 15px;
  background-color: white;
  background-size: contain;
  background-repeat: repeat;
  border-radius: 10px;
  &:hover {
   animation: ${scaleAnimation} 0.3s ease-in-out forwards;
 }
`;
const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
`;
const ImgDiv = styled.div`
`;
const CardH =styled.h2`
margin: 0;
font-size: 20px;
line-height: 1.2;
`; 
const NameSt = styled.div`

`;
const Boton = styled.button`
background-color: pink;
color: black;
position: absolute;
top: 0;
right: 0;
border: none;
width 1.5vw;
height: 3vh;
cursor: pointer;
`;
export default function Card(props) {
   const close = ()=>{
    props.onClose(props.id)
   };
   return (
      <PageBackground>
         <CardContainer> 
            <ImgDiv> 
          <Boton onClick={close}>X</Boton>
          <CardImage src={props.image} alt='' />
          </ImgDiv>
          <Link to={`/detail/${props.id}` } >
         <CardH >{props.name}</CardH>
         </Link>
         <CardH>{props.status}</CardH>
         <CardH>{props.species}</CardH>
         <CardH>{props.gender}</CardH>
         <CardH>{props.origin}</CardH>
          
         </CardContainer>
      </PageBackground>
   );
}
