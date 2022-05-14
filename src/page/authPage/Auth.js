import '../../App.css';
import Login from './component/Login';
import Register from './component/RegisterForm';
import React, { useState } from 'react';
import path from '../../images/authImages/yellowPin.jpg';


function Auth() {
    const [itsLogin,setItsLogin] = useState(false);
    
    function clickHandler(e) {
        setItsLogin(itsLogin ? false : true);
      }  
      let authLabel 
      itsLogin ? authLabel = 'Login' : authLabel ='Register';
      
      return (
        <body className="bk">


<div className='borderAuth'>
         
         
         <div className='containerImage'>
         <img src={path} alt="yellowPin"  />
         <button class="btn" onClick={clickHandler}>
         {itsLogin? 'Register' : 'Login'}
         </button>
         </div>
        
         <div className='lineX'>
             <span>OR</span>
         </div>
     
     
     {itsLogin ?<Login/> :<Register/>}
      
   <button className='authButton' type="submit" value="Submit" >
   {authLabel}
   </button>

   </div>

      
      </body>
    );
  }
  
  export default Auth;