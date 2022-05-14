import '../../../App.css';
import React, { useState } from 'react';


function Register() {

    const [formData,setFormData] = useState(
        {name:"",email:"", password: ""}
      );
    
    function handelChanged(event){
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
        
          <input className='authInput' placeholder='User Name' type="text" name="name" 
          onChange={handelChanged}
          value={formData.name}/>
          <input className='authInput'  placeholder='Email'  type="text" name="email"
           onChange={handelChanged} 
           value={formData.email}/>
          <input className='authInput'  placeholder='Password'  type="password" name="password" 
           onChange={handelChanged}
           value={formData.password}/>
  
            
   <button className='authButton' type="submit" >
       Register
   </button>
      </form>

    );
  }
  
  export default Register;