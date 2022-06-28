
function ImgSlider(prop) {
    return(
        <img className='center slideContiner' 
        src={prop.imgPath}
        alt={prop.label}
      /> 
    )
}
export default ImgSlider;