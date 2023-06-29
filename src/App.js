import './App.css';
import Detail from './components/Detail';
import About from './components/about';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
const StDiv = styled.div`
background-image: url(https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/curiosidades.batanga.com/files/5-cosas-sobre-el-espacio-y-la-materia-que-debemos-tener-claras.jpg);
background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
`; 
function App() {
   const[characters, setCharacters] = useState([])
   function onClose(id) {
      const parsedId = parseInt(id)
      const updatedCharacters = characters.filter((character) => character.id !== parsedId);
      setCharacters(updatedCharacters);
   }
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   return (
      
      <StDiv>
 <div className='App'>
         <Nav onSearch={onSearch}/>
      </div>
         <Routes>
     <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} /> 
     <Route path="/about" element={<About />} /> 
     <Route path="/detail/:id" element={<Detail />} /> 
  </Routes>
     
      </StDiv>
   );
}
export default App;
