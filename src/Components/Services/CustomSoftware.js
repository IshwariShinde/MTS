import React from 'react'
import '../../CSS/customsoftware.css'
import AboutBottomContainer from '../About/AboutBottomContainer'

const CustomSoftware = () => {
  return (
    <div className='customsoftware'>
        <div className='customsoftware_top'>
          <div className='customsoftware_heading_container'>
            <p>Custom Software</p>
          </div>
        </div>
        <div className='customsoftware_mid'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='customsoftware_bottom'>
          <div className='customsoftware_bottom_left'>
            <img className='customsoftware_img' src='https://ishwarishinde.github.io/cdn/dummy5.jpg' alt='swimg'/>
          </div>
          <div className='customsoftware_bottom_right'>
            <div className='customsoftware_bottom_right_inner'>
              <h1>Lorem ipsum dolor</h1>
              <div className='customsoftware_bottom_right_inner_content'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='customsoftware_explore'>
        <h1>Explore More Services</h1>
        <div className='customsoftware_explore_content'>
          <AboutBottomContainer abtBottomImg="https://ishwarishinde.github.io/cdn/dummy6.jpg" abtBottomTitle="Web Development"/>
          <AboutBottomContainer abtBottomImg="https://ishwarishinde.github.io/cdn/dummy7.jpg" abtBottomTitle="Digital Marketing"/>
          <AboutBottomContainer abtBottomImg="https://ishwarishinde.github.io/cdn/dummy8.jpg" abtBottomTitle="Graphic designing"/>
        </div>
        </div>
    </div>
  )
}

export default CustomSoftware