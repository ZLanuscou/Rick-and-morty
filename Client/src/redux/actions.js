import axios from "axios";
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER"
export const addFav =  function (character)  {
   return async function (dispatch) {
      try {
         const endpoint = 'http://localhost:3000/fav/';
   let response = await axios.post(endpoint, character)
   let {data} = response
   dispatch({
      type: ADD_FAV,
      payload: data,
    });
      } catch (error) {
         console.error('Error al agregar favorito:', error);  
      }
   }
}
export const removeFav = (id) => {
   const endpoint = 'http://localhost:3000/fav/' + id;
   return async(dispatch) => {
     let response = await axios.delete(endpoint)
     let {data} = response
     
         return dispatch({
            type: REMOVE_FAV,
            payload: data,})
     
   };
};
export const filterCards = (gender) =>{
 return{
   type: FILTER,
   payload: gender
 }
}
export const orderCards = (order) =>{
return {
   type: ORDER,
   payload: order
}
}    