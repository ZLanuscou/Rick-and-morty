import React from "react";
import SearchBar from './SearchBar';
import styled from "styled-components";
import { Link } from "react-router-dom";
const Btn = styled.button`
-webkit-transition-duration: 0.4s; /* Safari */
transition-duration: 0.4s;
&:hover{background-color: #4CAF50; /* Green */
color: white;} 
margin: 10px;
`;
const SearchBarContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 0px;
background-color: white; 
background-size: cover;
background-repeat: no-repeat;
  
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin: 0px;
`;

const NavLink = styled(Link)`
margin: 10px 40px;

  transition-duration: 0.4s;
  &:hover {
    background-color: #4caf50;
    color: white;
  }
  
  text-decoration: none;
`;
export default function Nav(props) {
   return (
   
      <SearchBarContainer>
        <NavLink to="/favorites" >Favorites</NavLink>
         <NavLink to="/about" >About</NavLink>
           <NavLink to="/home">Home</NavLink>
          <SearchBar onSearch={props.onSearch}/>
          <NavLink to="/Form">Login</NavLink>
      </SearchBarContainer>
   );
}
