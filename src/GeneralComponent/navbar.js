import React, { useState } from 'react';

import "./navbar.css";
import NavLink from './NavLink';


function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);
    return (
     

        <nav className="navbar"  dir="ltr">
          <div className="nav-container">
              
            <a  href="/"   className={click ? "nav-logo active" : "nav-logo"}  >
              <i className="fas fa-code"></i>
            </a >
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
                <NavLink
                 href="/login"
                 name = "تسجيل دخول"
                  activeClassName="nav-links active"
                  className="nav-links"
                  onClick={handleClick}
                />
                  
                
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