import './homeCss/home.css';
import Card from './component/card';
import InputCardname from './component/inputCard';
import TableCard from './component/tableCard';
import  NavBar from '../../GeneralComponent/navbar'

import infoBank from './informationBank';
function App() {
  console.log(infoBank);

  

  return (
    
    <div>
          
           <NavBar/>
      <div  className='bkk' >
   {
       infoBank.map(items => 
        
        !items.hasElement? 
        
        <Card
         name = {items.name}
         hasElement={items.hasElement}
         TextContianit={items.TextContianit}/>
        
         : (items.hasElement === "input")?
       
         <InputCardname 
         name= {items.name}
         TextContianit={items.TextContianit}/>

         : <TableCard name = {items.name}
         hasElement={items.hasElement}
         TextContianit={items.TextContianit}/>
      )
   }
 
   </div>
   </div>
   
  );
}

export default App;
