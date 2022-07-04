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

var constIndex =[];
for(var i = 0 ; i <= contianitSize-1 ; i++) {
 constIndex.push({id : i})
}

function goTospecifyPicture(id) {
 setActiveStep(id);
}



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




       <button className='btnSlideRightMid btnSlideMid' onClick={goToPrevPicture}
                     disabled={index === 0 }
                     >&#171; 
                     </button>
         



       <button className='btnSlideLeftMid btnSlideMid' onClick={goToNextPicture}
                      disabled={index === contianitSize - 1}
                      >&#187;
                     </button>   
       </div>
      
       <footer className='cardFotter '>
     
                  
            {
                constIndex.map(val => (
                 
                  <div className='btnchean btncheanstyle' id={val.id}
                    onClick={fun =>  goTospecifyPicture(val.id)} >
                       {val.id} 
                    </div>
                     
                ))

            }

       </footer>
 
    </div>
  );
}


export default Card;
