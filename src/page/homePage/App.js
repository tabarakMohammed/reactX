import './homeCss/home.css';
import Card from './component/card';
import InputCardname from './component/inputCard';
import TableCard from './component/tableCard';
import  NavBar from '../../GeneralComponent/navbar'
import React from 'react';
import {useContext} from 'react';
import {globalState} from '../../GeneralComponent/globalState'
import infoBank from './informationBank';
function App() {
  
  const {token} = useContext(globalState);
  const [msg, setMsg] = React.useState("false");

  const [openModal, setClose] = React.useState(false);

const onOpen = () => {
  setClose((prevActiveStep) => prevActiveStep ? false : true);
};
 

 getHome();

 async function  getHome(){

  await  fetch("http://localhost:8080/home", {
    headers: {
    'Authorization': `Bearer  ${token.token}`
    
  },
    method: "POST",body:JSON.stringify({
      token:token.token
    }),
    
})
  .then(res => {
    if (res.ok) {
       // console.log(res.json);
       setMsg(res.statusText);
      return res.json();
    } else {
      setMsg(res.statusText);
      throw Error( "error: " + res.statusText);
    }
  })
  
 
 


}

 return (
    
    <div>
          
           <NavBar/>
      <div  className='bkk' >
            
   {
       infoBank.map(items => 
        
        openModal? 
        <div>
           <div className='fontcolor'> 
          {items.hasElement === "input"?'' : items.hasElement}
          </div>

             { items.hasElement && items.hasElement !== "input" ? 
           <button className='backButton' onClick={onOpen}> رجوع </button>
           : ''
             }
        </div>
          :
          
        !items.hasElement ?
        
        <Card
         name = {items.name}
         hasElement={items.hasElement}
         TextContianit={items.TextContianit}
        />
        
         : (items.hasElement === "input") ?
       
         <InputCardname 
         name= {items.name}
         TextContianit={items.TextContianit}/>

         :  <TableCard name = {items.name}
         hasElement={items.hasElement}
         TextContianit={items.TextContianit}
         statusModal={onOpen} 
         /> 

      )
      
   }
 
   </div>
   <p> {msg}</p> 
   </div>
   
  );
}

export default App;
