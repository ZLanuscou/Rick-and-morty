import './form.css'
import React, { useState } from "react";
import Validate from "./validation";

export default function Form(props) {
    
const [userData, setuserData] = useState({email:"", password:""})
const [error, setError] = useState({});
function handleChange(event) {
    setuserData({ ...userData, [event.target.name]: event.target.value })
    setError(Validate({ ...userData, [event.target.name]: event.target.value }))
}
    const handleSumbit = event => { 
        event.preventDefault();
        props.login(userData);
    }
   
return ( 
    <div className="div-container">
  <div className="container">  
    
<form onSubmit={handleSumbit}>
<label></label>
    <input className='input'
    onChange={handleChange}
    type = "text"
    placeholder="Email..."
    value = {userData.email}
    name="email"
    >
    </input>
    <p>{error.email ? error.email : null}</p>
<label></label>
<input className='input'
name="password"
onChange={handleChange}
placeholder="Password"
type= "password"
value= {userData.password}
>

</input>
<p>{error.password && error.password }</p>
<input className='input' type="submit" />
</form>
 
</div> 
</div>
);
}