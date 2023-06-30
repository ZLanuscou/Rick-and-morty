
import React, { useState } from "react";
import Validate from "./validation";
export default function Form() {
const [userData, setuserData] = useState({email:"", password:""})
const [error, setError] = useState({});
function handleChange(event) {
    setuserData({ ...userData, [event.targer.name]: event.target.value })
    setError(Validate({ ...userData, [event.targer.name]: event.target.value }))
}
    
return ( 
 <div>   
<form>
<label></label>
    <input 
    onChange={handleChange}
    type = "text"
    placeholder="Email..."
    value = {userData.email}
    name="email"
    >
    </input>
<label></label>
<input
name="password"
onChange={handleChange}
placeholder="Password"
type= "text"
value= {userData.password}
>
</input>
<input type="submit" />
</form>
</div> 
);
}