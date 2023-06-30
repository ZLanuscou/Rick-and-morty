import React from "react";
import SearchBar from './SearchBar';
import styled from "styled-components";
import { Link } from "react-router-dom";
const Btn = styled.button`
-webkit-transition-duration: 0.4s; /* Safari */
transition-duration: 0.4s;
&:hover{background-color: #4CAF50; /* Green */
color: white;} 
margin: 1px;
`;
const SearchBarContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 0px;
background-color: black; 
background-size: cover;
background-repeat: no-repeat;
  
  border-radius: 5px;
  padding: 10px;
  width: 100%;
`;

const NavLink = styled(Link)`
  transition-duration: 0.4s;
  &:hover {
    background-color: #4caf50;
    color: white;
  }
  margin: 1px;
  text-decoration: none;
`;
export default function Nav(props) {
   return (
   
      <SearchBarContainer>
         <NavLink to="/about" >About</NavLink>
           <NavLink to="/home">Home</NavLink>
          <SearchBar onSearch={props.onSearch}/>
          <NavLink to="/Form">Login</NavLink>
      </SearchBarContainer>
   );
}
