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
top: 20px;
right: 20px;
text-decoration: none;
`;
const SearchBarContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
margin: 20px;
background-color: white; 
background-size: cover;
background-repeat: no-repeat;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  max-width: 350px;
`;
export default function Nav(props) {
   return (
   
      <SearchBarContainer>
         <Btn><Link to="/about" >About</Link></Btn>
         <Btn>  <Link to="/home">Home</Link></Btn>
          <SearchBar onSearch={props.onSearch}/>
      </SearchBarContainer>
   );
}
