import '../../../App.css';


function Login() {
    return (
      <form className='authForm' >
        
          <input className='authInput'  placeholder='Email'  type="text" name="email" />
          <input className='authInput'  placeholder='Password'  type="password" name="password" />
  
         
      </form>

    );
  }
  
  export default Login;