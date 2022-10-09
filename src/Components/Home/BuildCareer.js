import React from 'react'
import '../../CSS/buildCareer.css'
import {NavLink} from 'react-router-dom'

const BuildCareer = () => {
  return (
    <div className='buildCareer'>
        <div className='buildCareer_left'>
            <img src="https://ishwarishinde.github.io/cdn/shapecareer.png" alt="careerimg" className='careerImg animate__animated animate__backInLeft' />

        </div>
        <div className='buildCareer_right animate__animated animate__backInRight'>
            <h3>Shape your Career here</h3>
            <p>We at Mahendra Techno-Soft aims  to refine the Freshers into a highly experienced IT Professional<br /> through Quality Training and Skills upgradation.</p>
            <h6 style={{color:"grey"}}>Have a look at what our M-Tians have to say</h6>
           <NavLink to='/workexperience' id='explore_btn'><div id="circle"></div><button className='buildCareer_btn'>Explore</button></NavLink> 

        </div>
    </div>
  )
}

export default BuildCareer