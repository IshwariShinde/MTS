import React from 'react'
import { GrTechnology,GrRestroomWomen } from "react-icons/gr";
import { FaChalkboardTeacher } from "react-icons/fa";
import '../../CSS/aboutusBottom.css'
import AboutBottomContainer from './AboutBottomContainer';

const AboutUsBottom = () => {
  return (
    <div className='aboutUsBottom'>
       <div className='abt_bottom_heading'>
        <h1>Explore M-TechnoSoft</h1>
       </div>
       <div className='abt_bottom_content'>
        <AboutBottomContainer abtBottomImg="https://ishwarishinde.github.io/cdn/dummy3.jpg" abtBottomTitle="Leadership" />
        <AboutBottomContainer abtBottomImg="https://ishwarishinde.github.io/cdn/dummy3.jpg" abtBottomTitle="Why M-TechnoSoft" />
        <AboutBottomContainer abtBottomImg="https://ishwarishinde.github.io/cdn/dummy3.jpg" abtBottomTitle="Our Core Values" />
       </div>
    </div>
  )
}

export default AboutUsBottom