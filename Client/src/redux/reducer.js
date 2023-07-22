import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./actions"
const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, action)=>{
 switch (action.type) {
    case ADD_FAV:
        return {
            ...state,
            allCharacters: action.payload,
           myFavorites: action.payload,
        }
        case REMOVE_FAV:
            
        return {
            ...state,
            myFavorites: action.payload,
                   
                    }
        case FILTER:
            const copy = [...state.allCharacters]
         const filter = copy.filter((character)=> character.gender === action.payload)
        return{
        ...state,
        myFavorites: filter
        }
        case ORDER:
            const copia = [...state.allCharacters]
            if(action.payload === "A"){
               const ascendente = copia.sort((a, b) => a.id - b.id)
               return{
               ...state,
               myFavorites: ascendente
               }
            }
            if(action.payload === "D"){
                const descendente = copia.sort((a, b) => b.id - a.id)
                return{
                ...state,
                myFavorites: descendente
                }
             }
    default:
        return state;
        
 }
}
export default reducer;