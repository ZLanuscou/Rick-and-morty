import Card from './Card';

export default function Cards(props) {
   const array = props.characters
   return (<div>
      {array.map((charact) => { 
        return <Card key = {charact.id} onClose = {() => window.alert("Emulacion cierre")} name = {charact.name} status = {charact.status}
         species = {charact.species} gender = {charact.gender}
         origin = {charact.origin.name} 
          image = {charact.image}             
        />  
      })}
   </div>);
}
