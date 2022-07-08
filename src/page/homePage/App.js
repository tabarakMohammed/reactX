import './homeCss/home.css';
import Card from './component/card';
import InputCardname from './component/inputCard';
import TableCard from './component/tableCard';
import  NavBar from '../../GeneralComponent/navbar'
import React from 'react';

import infoBank from './informationBank';
function App() {

  const [openModal, setClose] = React.useState(false);

const onOpen = () => {
  setClose((prevActiveStep) => prevActiveStep ? false : true);
};

console.log(openModal);
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
   </div>
   
  );
}

export default App;
