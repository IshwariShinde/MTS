import React from 'react'
import '../CSS/home.css'
import Achievements from './Home/Achievements'
import BuildCareer from './Home/BuildCareer'
import Expertise from './Home/Expertise'
import HeroSection from './Home/HeroSection'
import Media from './Home/Media'
import Partners from './Home/Partners'
import Tagline from './Home/Tagline'


const Home = () => {
  return (
    <div className='Home' >
      <HeroSection/>
      <Tagline/>
      <BuildCareer />
      <Expertise />
        <Achievements/>
        <Partners />
        <Media />
      
        
        
        
    </div>
  )
}

export default Home