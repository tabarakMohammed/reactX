
import '../homeCss/home.css';


function TableCard(prop) {
    let label = prop.name;


  

return (
    <div className="card">

       <div className='cardTitle center'>
         <header>
         <p className='cardText'>
         {label}    
          </p>
         </header> 
        </div>

      <div className='cardBody center'>
      {prop.hasElement}
      </div>
      
       <footer className='cardFotter center'>
          <button onClick={prop.statusModal} className='messageButton'> عرض المزيد </button>   
       </footer>
 
    </div>
  );
}
export default TableCard;
