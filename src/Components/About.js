import React from 'react'
import Offer from './About/Offer'
import Purpose from './About/Purpose'

import '../CSS/about.css'
import AboutUsBottom from './About/AboutUsBottom'
import ABoutTop from './About/ABoutTop'
import WhoWeAre from './About/WhoWeAre'
import WhatWeDo from './About/WhatWeDo'
import AboutUsTagline from './About/AboutUsTagline'


const About = () => {
  return (
    <div className='aboutUs'>
      <ABoutTop />
      <AboutUsTagline />
      <WhoWeAre />
        <Purpose />
        <Offer />
        <WhatWeDo />
        <AboutUsBottom />
        
    </div>
  )
}

export default About