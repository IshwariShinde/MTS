
import React, { useState, useEffect } from "react";
import '../../CSS/testimonial.css'
function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      clinetImage:"",
      clientName: 'Coach Geeta 360 ( US)',
      clientReview:"As a solopreneur and not tech-savvy, I was fortunate to come across Mtechnosoft, and glad to say that I received quality work beyond our expectations and answers to every silly question I had regarding SEO or Google. You guys are great"
    },
    {
      id: 2,
      clinetImage:"",
      clientName: 'Aashish , ( Singapore)',
      clientReview:"2+ years of our relationship, and all we can say is you guys rock! We recommend you guys to anyone looking for an excellent digital marketing company."
    },
    {
      id: 3,
      clinetImage:"",
      clientName: 'Prasad M ( Stockholm, Sweden )',
      clientReview:"We were worried about outsourcing our digital marketing solutions but were pleasantly surprised by your team. The transition was seamless and transparent, with excellent quality and prompt turnaround time. We will always have a few good words to say."
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
    <div className='testimonial'>
      <div
        className="test_slider"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
         
        }}
      >
         <div className="test-text-overlay">
          <div className="Cimage">
          <div className="cimage_inner" /></div>
        <h2 className='Cname'>{slides[currentIndex].clientName}</h2>
        <p className='Creview'>{slides[currentIndex].clientReview}</p>
      </div>
    
      <button className="testi_prev"  onClick={prevSlide}>&#10094;</button>
      <button  className="testi_next" onClick={nextSlide}>&#10095;</button>
    </div></div>
  );
}

export default Testimonial
