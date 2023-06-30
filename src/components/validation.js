function Validate(datos) {
const regex = new RegExp(/\S+@\S+\.\S+/);
let incorrecto = {}  
if(!regex.test(datos.email) || datos.email.length < 1 || datos.email.length > 35) { 
incorrecto.email = "Mail invalido"
} else if (!/\d/.test(datos.password) || datos.password.length < 6 || datos.password.length > 10){
    incorrecto.password = "Contraseña invalida"
}
return incorrecto

}
export default Validate