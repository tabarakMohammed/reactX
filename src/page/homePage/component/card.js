import '../homeCss/home.css';
import ImgSlider from './imgSlider'
import React from 'react';


function Card(prop) {
let label = prop.name;
let  contianit = prop.TextContianit;

const contianitSize = contianit.length;

const [index, setActiveStep] = React.useState(0);

const goToNextPicture = () => {
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
};
const goToPrevPicture = () => {
  setActiveStep((prevActiveStep) => prevActiveStep - 1);
};


  return (
    <div className="card">
      <div className='cardTitle center'>
         <header>
         <p className='cardText '>
          {label}    
          </p>
         </header> 
        </div>

      <div className='cardBody center'>
      { contianit[index].imgPath?
    
    <ImgSlider
      imgPath = {contianit[index].imgPath}
      label = {contianit[index].label}
      />
     : 
        <div className=' cardText '>
         {contianit[index].label}
         <br></br>
         {contianit[index].describtion}
         </div>
      }




       <button className='btnSlideRightMid' onClick={goToPrevPicture}
                     disabled={index === 0 }
                     > &larr;  
                     </button>
       <button className='btnSlideLeftMid' onClick={goToNextPicture}
                      disabled={index === contianitSize - 1}
                      >&rarr;
                     </button>   
       </div>
      
       <footer className='cardFotter center'>
     
       <button className='btnSlideRight' onClick={goToPrevPicture}
                     disabled={index === 0 }
                     > &larr;  </button>
       <button className='btnSlideLeft'
              onClick={goToNextPicture}
              disabled={index === contianitSize - 1}
            >
               &rarr;
           
            </button>   
       </footer>
 
    </div>
  );
}


export default Card;
