import '../../App.css';
import Login from './component/LoginForm';
import Register from './component/RegisterForm';


import React, { useState } from 'react';
import path from '../../images/authImages/yellowPin.jpg';


function Auth() {
    const [itsLogin,setItsLogin] = useState(true);
    
    function clickHandler(e) {
        setItsLogin(itsLogin ? false : true);
      }  
    
      return (
        <div className="bk">




          <div className='borderAuth'>
         
         
         <div className='containerImage'>
         <img src={path} alt="yellowPin"  />
         <button className="btn" onClick={clickHandler}>
         {itsLogin? 'Register' : 'Login'}
         </button>
         </div>
        
         <div className='lineX'>
             <span className='linXText'> OR </span>
         </div>
     
     
     {itsLogin ?<Login/> :<Register goLogin = {clickHandler}/>}

   </div>

      
      </div>
    );
  }
  
  export default Auth;