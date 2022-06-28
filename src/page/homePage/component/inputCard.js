import '../homeCss/home.css';
import React, { useState } from 'react';




function InputCard(prop) {
    let label = prop.name

    const [formData,setFormData] = useState(
        {message:""}
      );
    
    function handelEvenetChanged(event){
      setFormData(pastData =>{
    return {...pastData,
              [event.target.name]: event.target.value  
            }
      })
    }
     
    function handelSave(e){
      e.preventDefault();
      sendToApi(formData);
    }
    
    function  sendToApi(formData){
      console.log(formData);
    }
  



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
         
          <form className='authForm' onSubmit={handelSave} >
            
            <textarea rows="7" className='authInput'  placeholder='رسالة'  type="text" name="message" 
          onChange={handelEvenetChanged} 
          value={formData.message}/>
        
      
        </form>
    
          </div>
          
           <footer className='cardFotter center'>
           <button className='messageButton' type="submit"  onClick={handelSave} >
                        أرسل
                    </button>
     
           </footer>
     
        </div>
      );
    }
    export default InputCard;
