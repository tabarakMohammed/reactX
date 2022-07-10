import '../../../App.css';
import React, { useState, useContext } from 'react';
//import log from '../logicBack/log'
import {globalState} from '../../../GeneralComponent/globalState'
import { useNavigate  } from "react-router-dom";

function Login() {

  const {settoken} = useContext(globalState);

  const [message,setMsg] = useState('')

  const [formData,setFormData] = useState(
    {Email:"", password: ""}
  );

function handelEvenetChanged(event){
  setFormData(pastData =>{
return {...pastData,
          [event.target.name]: event.target.value  
        }
  })
}

function handelSave(e){
  e.preventDefault();
    sendToApi(formData);
}

let navigate = useNavigate(); 
 async function  sendToApi(formData){
  setMsg('...')

  await  fetch("http://localhost:8080/auth", {
  method: "POST",
  body:  JSON.stringify({
   username:  formData.Email,
   password: formData.password,
 })
})
  .then(res => {
    if (res.ok) {
       // console.log(res.json);
      return res.json();
    } else {
      setMsg(res.statusText);
      throw Error( "error: " + res.statusText);
    }
  })
  .then(json => {
   settoken(json)
   navigate( '/');
  })
  .catch(error => console.error(error));
 
 


}
  
    return (

      
      <form className='authForm' onSubmit={handelSave} >
        
          <input className='authInput'  placeholder='Email'  type="text" name="Email" 
          onChange={handelEvenetChanged} 
          value={formData.Email}/>
          <input className='authInput'  placeholder='Password'  type="password" name="password" 
           onChange={handelEvenetChanged} 
           value={formData.password}/>
  
              
   <button className='authButton' type="submit"  >
       Login
   </button>
    
    { message === "..." ?
      <p className='spinnerX' ></p> :
      <p>{message}</p>
     }
      </form>

    );
  }
  
  export default Login;