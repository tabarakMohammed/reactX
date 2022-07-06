

import '../../App.css';
import  NavBar from '../../GeneralComponent/navbar'
import UserCard from "./componant/userCard"
var user = [{ "id":1, "name":"احمد", "type":"طالب" },
{ "id":1, "name":"ahmed", "type":"student" },
{ "id":1, "name":"ahmed", "type":"student" },
{ "id":1, "name":"ahmed", "type":"student" }]

function Users() {
    return (
      <div>
        <NavBar/>
        <div className="bkk" dir='rtl'>
          
   
   { user.map(items => 
          
          <UserCard
          id={items.id}
          name={items.name}
          type={items.type}
          />

          )}
        </div>
      </div>
    );
  }
  
  export default Users;