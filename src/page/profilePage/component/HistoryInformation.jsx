
function HistoryInformation(prop) {
    return(

<div className="card animi"   style={{ borderRadius : 0}}>
      {/* <div className={openModal ? 'open' : 'close'} > modal ... </div> */}
       <div className='cardTitle center'>
         <header>
         <p className='cardText' >
         {prop.name}
 
          </p>
         </header> 
        </div>

      <div className='cardBody center'>
          <table className={prop.className}>
            <div >{prop.table}</div>
          </table>
      </div>
      
       <footer className='cardFotter center'>
          <button onClick={() => prop.statusModal(prop.table, prop.name)} className='messageButton'> عرض المزيد </button>   
       </footer>
 


       </div>


)
}
export default HistoryInformation;
