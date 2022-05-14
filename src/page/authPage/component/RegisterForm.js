import '../../../App.css';


function Register() {
    return (
         
        
        <form className='authForm' >
        
          <input className='authInput' placeholder='User Name' type="text" name="name" />
          <input className='authInput'  placeholder='Email'  type="text" name="email" />
          <input className='authInput'  placeholder='Password'  type="password" name="password" />
  
         
      </form>

    );
  }
  
  export default Register;