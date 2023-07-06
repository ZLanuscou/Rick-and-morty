function Validate(datos) {
const regex = new RegExp(/\S+@\S+\.\S+/);
let incorrecto = {}  
if(!regex.test(datos.email) ) { 
incorrecto.email = "Mail invalido"
}
if(datos.email.length < 1){
    incorrecto.email = "Debe ingresar un email"
}
if(datos.email.length > 35){
    incorrecto.email = "El email debe tener menos de 35 caracteres!"
}
 if ( datos.password.length < 6 || datos.password.length > 10){
    incorrecto.password = "Debe tener entre 6 y 10 caracteres"
}
if(!/\d/.test(datos.password)){
    incorrecto.password = "debe tener almenos un numero"
}
return incorrecto

}
export default Validate
 