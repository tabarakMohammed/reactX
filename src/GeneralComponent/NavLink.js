import { Link } from "react-router-dom";

 

function NavLink(props) {

          let act;
          const pathname = window.location.pathname 
          if(pathname === props.href ){act = true}
    return(
      
         <nav onClick={props.onClick} >
           <Link className={act ?  props.activeClassName : props.className } to={props.href}>
             {props.name}  
           </Link>

        </nav>

    );
}

export default NavLink;