import './App.css';
import { useNavigate } from 'react-router-dom';
import { useLocation, Navigate } from 'react-router-dom';
import Favorites from './components/Favorites';
import Form from './components/Form';
import Detail from './components/Detail';
import About from './components/about';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import styled from 'styled-components';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
const BackgroundDiv = styled.div `
background-image: url();
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 100%;
width: 100%;
`;


function App() {
   const location = useLocation();
   const[characters, setCharacters] = useState([])
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'zubairalilanuscou@gmail.com';
   const PASSWORD = 'qwerty123';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onClose(id) {
      const parsedId = parseInt(id)
      const updatedCharacters = characters.filter((character) => character.id !== parsedId);
      setCharacters(updatedCharacters);
   }
   function onSearch(id) {
      axios(`http://localhost:3000/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   return (
      
 <div className='App'>
   {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
         
      
      
         <Routes>      
         <Route path="/favorites" element={<BackgroundDiv> <Favorites /> </BackgroundDiv>} />       
     <Route path="/home" element={ <BackgroundDiv> <Cards characters={characters} onClose={onClose} /></BackgroundDiv>} /> 
     <Route path="/about" element={<BackgroundDiv> <About /></BackgroundDiv>} /> 
     <Route path="/detail/:id" element={<BackgroundDiv> <Detail /></BackgroundDiv>} />          
     <Route path="/" element={<BackgroundDiv> <Form login={login}/></BackgroundDiv>}/> 
  </Routes>
  </div>
  
);
       }
export default App;
