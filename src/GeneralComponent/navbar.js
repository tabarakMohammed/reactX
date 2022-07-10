import React, { useState , useContext} from 'react';
import {globalState} from './globalState'
import "./navbar.css";
import NavLink from './NavLink';
import { Link } from "react-router-dom";


function NavBar() {

  const {token,settoken} = useContext(globalState);

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);
    
    return (
     

        <nav className="navbar"  dir="ltr">
          <div className="nav-container">
              
            <Link  to="/"   className={click ? "nav-logo active" : "nav-logo"}  >
              <i className="fas fa-code"></i>
            </Link >
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
             
            <li className="nav-item">
              { token === '' ?
                <NavLink
                 href="/login"
                 name = "تسجيل دخول"
                  activeClassName="nav-links active"
                  className="nav-links"
                  onClick={handleClick}
                /> :
                <NavLink
                
                href="/login"
                name = "تسجيل خروج"
                 activeClassName="nav-links active"
                 className="nav-links"
                 onClick={() => {settoken('')}}
               /> 
              } 
                  
                
              </li>
                
            
              <li className="nav-item">
                <NavLink
                 href="/users"
                 name = "الطلاب و المدرسين"
                  activeClassName="nav-links active"
                  className="nav-links"
                  onClick={handleClick}
                />
                  
              </li>
          
              <li className="nav-item">
                <NavLink
                 href="/profile"
                 name = "الملف الشخصي"
                  activeClassName="nav-links active"
                  className="nav-links"
                  onClick={handleClick}
                />
                  
              </li>

            
              <li className="nav-item">
                <NavLink
                  href="/"
                  name = "الرئيسية"
                  active ={click}
                  activeClassName="nav-links active"
                  className="nav-links"
                  onClick={handleClick}
                />
                
              </li>
            </ul>

            <div className="nav-icon" onClick={handleClick}>
            <i>          
                قائمة الانتقال
           </i>

          
            </div>


          </div>
        </nav>
        
  );
  }
  
  export default NavBar;