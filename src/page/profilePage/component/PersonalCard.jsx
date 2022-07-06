
import "../profileCss/profile.css"
function PersonalCard(prop) {
    return(
        <div>
            
           

         <div className="infobox">
     
           <div className="f">
             <img  className="imageCard"
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1yT4DmHv_jOOt7GLCO2pZY4wcst77Nvi4A&usqp=CAU'
              alt="pic"
               /> 
            
            </div>

            {/* <div  className="underImage">
           <h6 className="textcolor"> {prop.type} : {prop.id} </h6>
           </div> */}

            <div className="ibox">
           <div className="name ">
            <p className="parText"> أسم : 
             {prop.name}</p>
           </div>
           <div className="age ">
            <p className="parText"> تاريح التولد : 
             12-12-2002</p>
           </div>
           <div className="adress ">
            <p className="parText"> العنوان : 
             بغداد / الرصافة</p>
           </div>
           <div className=" currentClass">
            <p className="parText"> الصف الحالي : 
             السادس </p>
           </div>
           <div className="id ">
            <p className="parText">  
            {prop.type} : {prop.id}</p>
           </div>
        
         </div> 
        
         </div>
        </div>
        
    )
}
export default PersonalCard;