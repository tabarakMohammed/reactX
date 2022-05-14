import '../../../App.css';
import React, { useState } from 'react';


function Login() {
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

function  sendToApi(formData){
  console.log(formData);
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
      </form>

    );
  }
  
  export default Login;