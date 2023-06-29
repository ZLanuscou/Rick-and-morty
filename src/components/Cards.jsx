import Card from './Card';
import styled from 'styled-components';
import imagen from './assets/imagen.png';
const StyledDiv = styled.div`
border-radius: 10px;
`;
const ContainCard = styled.div`
display: flex;

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
     <StyledDiv>
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
     </StyledDiv>
   );
 }
