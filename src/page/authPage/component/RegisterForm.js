import '../../../App.css';
import React, { useState } from 'react';

function Register(prop) {

 

  const [message,setMsg] = useState('')


    const [formData,setFormData] = useState(
        {name:"",userType:"Student", password: ""}
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
   
    function sendToApi(formData){
      setMsg('...')

// console.log(formData)

      fetch("http://127.0.0.1:8080/auth/reg", {
        method: "POST",
        body: JSON.stringify({
          username:  formData.name,
          password: formData.password,
          usertype: formData.userType
        })
      })
        .then(res => {
          if (res.ok) {
            return res;
          } else {
            setMsg(res.statusText);
            throw Error( "error: " + res.statusText);
          }
        })
        .then(json => {
          window.location.reload(false);

        //  navigate( '/login');
        })
        .catch(error => console.error(error));

    }
    


    return (
         
        
        <form className='authForm' onSubmit={handelSave} >


<select className='authInput' 
            value={formData.userType}
             onChange={handelChanged} name="userType">

            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Other Employee">Other Employee</option>
           </select> 
        
          <input className='authInput' placeholder='User Name' type="text" name="name" 
          onChange={handelChanged}
          value={formData.name}/>
        
          <input className='authInput'  placeholder='Password'  type="password" name="password" 
           onChange={handelChanged}
           value={formData.password}/>
            
         <button className='authButton' type="submit" >
              Register
          </button>
          { message === "..." ?
           <p className='spinnerX' ></p> :
          <p>{message}</p>
          }
      </form>

    );
  }
  
  export default Register;