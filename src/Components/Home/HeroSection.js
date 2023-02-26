
import React, { useState, useEffect } from "react";
import '../../CSS/hero.css'
import { BsDownload } from "react-icons/bs";
function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      image: 'https://ishwarishinde.github.io/cdn/digitaltransform.png',
      title: 'Digital Transformation,Innovation & Strategy Consulting',
      subtitle: 'Slide 1 Subtitle'
    },
    {
      id: 2,
      image: 'https://ishwarishinde.github.io/cdn/videoediting.jpg' ,
      title: 'Great Customer Experiences Delivered',
      subtitle: 'Slide 2 Subtitle'
    },
    {
      id: 3,
      image: 'https://ishwarishinde.github.io/cdn/innovationleader.png',
      title: 'Innovation that Turns Brands into Leaders',
      subtitle: 'Slide 3 Subtitle'
    }
  ];

  const nextSlide = () => {
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  }

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 8000);
    return () => {
      clearInterval(intervalId);
    }
  }, [nextSlide]);

  return (
    <div className='hero'>
      <div
        className="slider"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
         
        }}
      >
         <div className="text-overlay">
        <h2 className='slider_heading'>{slides[currentIndex].title}</h2>
        <p className='slider_description'>{slides[currentIndex].subtitle}</p>
        <a href="https://ishwarishinde.github.io/cdn/MTechSoft_Profile.pdf" download><button className='slider_btn'>Download Our Profile<BsDownload id='slider_icon'/></button></a></div>
      </div>
    
      <button className="prev"  onClick={prevSlide}>&#10094;</button>
      <button  className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
}

export default Slider
