import '../../../App.css';
import path from '../../../images/authImages/yellowPin.jpg';


function Register() {
  // let path='../../../images/authImages/yellowPin.jpg'
    return (
          <div className='borderAuth'>
         
         
            <div className='containerImage'>
            <img src={path} alt="yellowPin"  />
            <button class="btn"> Login  </button>
            </div>
           
            <div className='lineX'>
                <span>OR</span>
            </div>
        
        <form className='authForm' >
        
          <input className='authInput' placeholder='User Name' type="text" name="name" />
          <input className='authInput'  placeholder='Email'  type="text" name="email" />
          <input className='authInput'  placeholder='Password'  type="password" name="password" />
  
         
      </form>

      <button className='authButton' type="submit" value="Submit" >
      Register
      </button>

      </div>
    );
  }
  
  export default Register;