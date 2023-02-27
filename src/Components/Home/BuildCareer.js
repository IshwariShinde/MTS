import React from 'react'
import '../../CSS/buildCareer.css'
import {NavLink} from 'react-router-dom'

const BuildCareer = () => {
  return (
    <div className='buildCareer'>
        <div className='buildCareer_left'>
            <img src="https://ishwarishinde.github.io/cdn/buildcareer.jpg" alt="careerimg" className='careerImg animate__animated animate__backInLeft' />

        </div>
        <div className='buildCareer_right animate__animated animate__backInRight'>
            <h1>Lorem ipsum dolor</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            {/* <h6 style={{color:"grey"}}>Have a look at what our M-Tians have to say</h6> */}
          
         
           <NavLink to='/workexperience'><button class="button-48" ><span class="text">Explore</span></button></NavLink>





        </div>
    </div>
  )
}

export default BuildCareer