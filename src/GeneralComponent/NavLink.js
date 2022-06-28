

function NavLink(props) {

          let act;
          const pathname = window.location.pathname 
          if(pathname === props.href ){act = true}
    return(
      
         <div onClick={props.onClick} >
           <a className={act ?  props.activeClassName : props.className } href={props.href}>
              {props.name} 
           </a>
        </div>

    );
}

export default NavLink;