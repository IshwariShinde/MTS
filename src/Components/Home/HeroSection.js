import React from 'react'
import '../../CSS/hero.css'
import { BsDownload } from "react-icons/bs";

const HeroSection = () => {
let index = 1;
// show(index);
let n=0;

// function plusDivs(n) {
//   show(index += n);
// }

function show() {
  let i;
  let slides = document.getElementsByClassName("slider");

  for (i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";

  }

  index++;

  index = index > slides.length ? 1 : index ;

  index=index+n;
  slides[index-1].style.display = "flex";

  setTimeout(show, 8000); 
   
  n=0;

}

// function next(){
//   n=1;
// }

// function prev(){
// n=-1;
// }

// function plusSlides(n) {
//   show(index += n);
// }
  return (
    <div className='hero' >
      <div className='slider fade' onLoad={show}>
      <div className='slider_left '>
      <p id='slider1_heading'>Digital Transformation,<br/>Innovation & Strategy<br/>Consulting</p>
      <span className='slider_description' id='slider1_description'>We are a digital transformation, innovation, and strategy company that<br/> help you reimagine what is possible with new technologies.</span>
      <a href="https://ishwarishinde.github.io/cdn/MTechSoft_Profile.pdf" download><button className='slider_btn'>Download Our Profile<BsDownload id='slider_icon'/></button></a>
      </div>
      <div className='slider_right '>
        <img src="https://ishwarishinde.github.io/cdn/superman1.png" alt="heroimg" className='sliderImg animate__animated animate__lightSpeedInRight' />
      </div> </div>
      <div className='slider fade'>
      <div className='slider_left'>
      <p>Great Customer Experiences<br/>Delivered</p>
      <span className='slider_description'>The best and the brightest minds in digital customer experience, come together<br/> for your digital future.</span>
      <a href="https://ishwarishinde.github.io/cdn/MTechSoft_Profile.pdf" download><button className='slider_btn'>Download Our Profile<BsDownload id='slider_icon'/></button></a>
      </div>
      <div className='slider_right'>
        <img src="https://ishwarishinde.github.io/cdn/superman_2.png" alt="heroimg" className='sliderImg animate__animated animate__lightSpeedInRight' />
      </div> </div>
      <div className='slider fade'>
      <div className='slider_left'>
      <p>Innovation that Turns<br/> Brands into Leaders </p>
      <span className='slider_description'>  Powered by innovation, our technologies are powerful, scalable, and<br/> fast inching you closer to success.</span>
      <a href="https://ishwarishinde.github.io/cdn/MTechSoft_Profile.pdf" download><button className='slider_btn'>Download Our Profile<BsDownload id='slider_icon'/></button></a>
      </div>
      <div className='slider_right'>
        <img src="https://ishwarishinde.github.io/cdn/sliderimg.jpg" alt="heroimg" className='sliderImg animate__animated animate__lightSpeedInRight' />
      </div> </div>

      {/* <a  href="#" className="prev" onclick="plusDivs(-1)" >&#10094;</a> */}
  {/* <a className="next" href='#' onclick="plusDivs(+1)" >&#10095;</a> */}

   




  




    </div>
  )
  }

export default HeroSection