import React from 'react'
import Offer from './About/Offer'
import Purpose from './About/Purpose'

import '../CSS/about.css'
import AboutUsBottom from './About/AboutUsBottom'
import ABoutTop from './About/ABoutTop'


const About = () => {
  return (
    <div className='aboutUs'>
      <ABoutTop />
        <Purpose />
        <Offer />
        <AboutUsBottom />
        
    </div>
  )
}

export default About