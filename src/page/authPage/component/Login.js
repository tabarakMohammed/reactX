import '../../../App.css';


function Login() {
    return (
      <div className='borderAuth'>
      <form className='authForm' >
    
      <label>
        email:
        <input type="text" name="email" />
      </label>

      <label>
        password:
        <input type="password" name="password" />
     </label>

       
      <input type="submit" value="Submit" />
    </form>
    </div>
    );
  }
  
  export default Login;