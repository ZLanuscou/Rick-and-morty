import React from "react"
import Card from "./Card";
import { connect, useDispatch } from "react-redux"
import styled from "styled-components";
import { filterCards, orderCards } from "../redux/actions";

const PageBackground = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

`;

function Favorites(props) {
  const dispatch = useDispatch()
  const [aux, setAux] = React.useState(false)
 const handleOrder = (event)=>{
  dispatch(orderCards(event.target.value))
  setAux(true)
 }
const handleFilter = (event)=>{
 dispatch(filterCards(event.target.value))
}
    const {myFavorites} = props
    return (
      <div> 
        
          <div>
          <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
          </select>
          <select onChange={handleFilter} >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      </div>
      <PageBackground>
          {myFavorites.map((character) => (
            <Card
            onClose = {character.onClose}
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin}
            />
          ))}
        </PageBackground>
        </div>
      );
}


const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps, null)(Favorites)