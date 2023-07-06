import Card from './Card';
import styled from 'styled-components';
import imagen from './assets/imagen.png';


const ContainCard = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`;
const CornerImage = styled.img`
  position: absolute;
  top: 30px; 
  right: 20px; 
  width: 100px; 
  height: 100px; 

`;
export default function Cards(props) {
  
   return (
     <div>
       <ContainCard>
         <CornerImage src={imagen} alt="Imagen de esquina" />
         {props.characters.map((charact) => (
           <Card
             key={charact.id}
             id={charact.id}
             onClose={props.onClose}
             name={charact.name}
             status={charact.status}
             species={charact.species}
             gender={charact.gender}
             origin={charact.origin.name}
             image={charact.image}
             
           />
         ))}
       </ContainCard>
     </div>
   );
 }
