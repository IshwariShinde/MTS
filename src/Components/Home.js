import React from 'react'
import '../CSS/home.css'
import Achievements from './Home/Achievements'
import BuildCareer from './Home/BuildCareer'
import Expertise from './Home/Expertise'
import Slider from './Home/HeroSection'
import HeroSection from './Home/HeroSection'
import Media from './Home/Media'
import Partners from './Home/Partners'



import Tagline from './Home/Tagline'
import Testimonial from './Home/Testimonial'
import ServiceContact from './Services/ServiceContact'


const Home = () => {
  return (
    <div className='Home' >
      {/* <HeroSection/> */}
      <Slider/>

      <Tagline/>
      <BuildCareer />
      <Expertise />
        <Achievements/>
        <Partners />
        <Media />
        <Testimonial/>
        <ServiceContact />
      
        
        
        
    </div>
  )
}

export default Home