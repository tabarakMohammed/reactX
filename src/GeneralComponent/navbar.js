import React, { useState } from 'react';

import "./navbar.css";
import NavLink from './NavLink';


function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);
    return (
     

        <nav className="navbar">
          <div className="nav-container">
              
            <a  href="/"   className={click ? "nav-logo active" : "nav-logo"}  >
              Tabarek Schoole
              <i className="fas fa-code"></i>
            </a >
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  href="/"
                  name = "Home"
                  active ={click}
                  activeClassName="nav-links active"
                  className="nav-links"
                  onClick={handleClick}
                />
                
              </li>
              <li className="nav-item">
                <NavLink
                 href="/users"
                 name = "users"
                  activeClassName="nav-links active"
                  className="nav-links"
                  onClick={handleClick}
                />
                  
              </li>
          
              <li className="nav-item">
                <NavLink
                 href="/profile"
                 name = "profile"
                  activeClassName="nav-links active"
                  className="nav-links"
                  onClick={handleClick}
                />
                  
              </li>

              <li className="nav-item">
                <NavLink
                 href="/login"
                 name = "login"
                  activeClassName="nav-links active"
                  className="nav-links"
                  onClick={handleClick}
                />
                  
                
              </li>

            </ul>

            <div className="nav-icon" onClick={handleClick}>
            <i>          
                menu
           </i>

          
            </div>


          </div>
        </nav>
        
  );
  }
  
  export default NavBar;