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
  background-color: #B0AEAD;
  opacity: 0.8;
  background-size: contain;
  background-repeat: repeat;
  border-radius: 10px;
  &:hover {
   animation: ${scaleAnimation} 0.3s ease-in-out forwards;
 }
`;
const CardImage = styled.img`
opacity: 0,9;
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  
`;
const ImgDiv = styled.div`
opacity: 0,9;
justify-content: center;
  text-align: center;
`;
const CardH =styled.h2`
font-family: "Arial", sans-serif;
margin: 0;
font-size: 20px;
line-height: 1.2;
`; 
const NameSt = styled.div`
justify-content: center;
  text-align: center;
`;
const Boton = styled.button`
font-size: 19px;
font-family: "Arial", sans-serif;

background-color:#3B3737;
color: black;
top: 0;
right: 0;
border: none;
width 100%;
height: 4vh;
cursor: pointer;
border-radius: 5px;
-webkit-transition-duration: 0.4s; /* Safari */
transition-duration: 0.4s;
&:hover{background-color: #A63119; /* Green */
color: white;} 

`;
const StLink = styled(Link)`

color: black;
transition-duration: 0.4s;
&:hover {
  background-color: ##909090 ;
  color: #909090 ;
}
text-decoration: none;
`;
export default function Card(props) {
   const close = ()=>{
    props.onClose(props.id)
   };
   return (
      <PageBackground>
      
         <CardContainer> 
            <ImgDiv> 
          <Boton onClick={close}>Remover</Boton>
          <CardImage src={props.image} alt='' />
          </ImgDiv>
          
         <NameSt> 
            <StLink to={`/detail/${props.id}` } >
         <Boton >{props.name}</Boton>
         </StLink>
         <CardH>{props.status}</CardH>
         <CardH>{props.species}</CardH>
         <CardH>{props.gender}</CardH>
         <CardH>{props.origin}</CardH>
         </NameSt>
         </CardContainer>
      </PageBackground>
   );
}
