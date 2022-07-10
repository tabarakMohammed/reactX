
import  NavBar from '../../GeneralComponent/navbar'
import '../../App.css';
import PersonalCard from './component/PersonalCard'
import CurrentInformation from './component/CurrentInformation'
import HistoryInformation from './component/HistoryInformation'
import tables from './component/tables'
import React,{useContext} from 'react';
import {globalState} from '../../GeneralComponent/globalState'
import jwt_decode from "jwt-decode";
var user = []



function Profile() {
  const {token} = useContext(globalState);
  const [idcheck, setId] = React.useState({table:"",title:""});

   
if(token !== "" ){
  const decoded = jwt_decode(token.token);
  console.log(decoded); 
  user=[{
    "id":decoded.user_id,
    "name":decoded.user_name,
    "type":decoded.userType
  }]
  
}






    return (
      <div dir="rtl">
        <NavBar/>
        <div className="bkk">

     
        { user.map(items => 
          
          <PersonalCard
          id={items.id}
          name={items.name}
          type={items.type}
          />

          )}
        <CurrentInformation/>
        
          {

                idcheck.table !== "" ?
                <div className='currentCard animi' >  
                <div className=' center'>
                  <p className='font'> {idcheck.title}</p>
                </div>
                
                  <table className="gridtable ">{idcheck.table}</table>
                  <div className='center'>
                  <button className='messageButton' onClick={()=>{    setId({table:"", title:""}) }}>أخفاء</button>
                  </div>
                </div>
                
                : 


            tables.map(items => 
              <HistoryInformation
          table = {items.table}
          name ={items.name}
          className ={"cardtable"}
          statusModal={(x,y) =>setId({table:x, title:y}) } />
            )
            }
            
            
          
          
     
          </div>
        
      </div>
    );
  }
  
  export default Profile;