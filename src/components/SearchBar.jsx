import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
const Stdiv = styled.div`
display: flex;
justify-content: flex-end;
`;
const StyledButton = styled.button`
-webkit-transition-duration: 0.4s; /* Safari */
transition-duration: 0.4s;
&:hover{background-color: #4CAF50; /* Green */
color: white;} 
margin: 2px;
top: 20px;
right: 20px;
`;
const Inp = styled.input`
margin: 7px;
border: none;
border-bottom: 2px solid black;
`;
export default function SearchBar(props) {
const [id, setId] = useState("")
const handleChange = (event) => {
setId(event.target.value);

}
   return (
      <Stdiv>
         <Inp onChange = {handleChange} value = {id} type='search' placeholder="Busca un personaje..." />
         <StyledButton className="button" onClick={()=>{props.onSearch(id)}}>Agregar</StyledButton>   
      </Stdiv>
   );
}
