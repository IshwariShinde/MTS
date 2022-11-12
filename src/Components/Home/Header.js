import React from 'react'
import '../../CSS/header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src="https://ishwarishinde.github.io/cdn/logo.png" alt="logo" className="logo_resize" />
      </div>
      <div >
        <ul className='nav_items'>
          <li><NavLink to={'/'} className="linkStyle" >HOME</NavLink></li>
          <div className='aboutDropdown'>
            <li><NavLink to={'/about'} className="linkStyle" >ABOUT US</NavLink></li>
            <div className='about_dropdown_content'>
              <li><NavLink to={'/whoweare'} className="linkStyle">Who We Are</NavLink></li>
              {/* <li><NavLink to={'/missionvision'} className="linkStyle">Our Mission & Vision</NavLink></li> */}
              {/* <li><NavLink to={'/ourteam'} className="linkStyle">Our Team</NavLink></li> */}
              {/* <li><NavLink to={'/whyjoinus'} className="linkStyle">Why Join Us</NavLink></li> */}
              {/* <li><NavLink to={'/value'} className="linkStyle">Our Core Values</NavLink></li> */}
              <li><NavLink to={'/story'} className="linkStyle">Our Story</NavLink></li>

            </div>
          </div>
          <div className='serviceDropdown'>

          <li><NavLink to={'/services'} className="linkStyle">SERVICES</NavLink></li>
          <div className='service_dropdown_content'>
          <li><NavLink to={'/customsoftware'} className="linkStyle" >Custom Software</NavLink></li>
          <li><NavLink to={'/webdevelopment'} className="linkStyle" >Web Development</NavLink></li>
          <li><NavLink to={'/businessintelligence'} className="linkStyle" >Business Intelligence</NavLink></li>
          <li><NavLink to={'/videoediting'} className="linkStyle" >Video Editing</NavLink></li>
          <li><NavLink to={'/dataannotation'} className="linkStyle" >Data Annotation Services</NavLink></li>
          <li><NavLink to={'/contentauditing'} className="linkStyle" >Content Auditing Services</NavLink></li>
          <li><NavLink to={'/digitalmarketing'} className="linkStyle" >Digital Marketing</NavLink></li>
          </div>
          </div>
          <li><NavLink to={'/industries'} className="linkStyle">INDUSTRIES</NavLink></li>
          <li><NavLink to={'/products'} className="linkStyle">PRODUCTS</NavLink></li>
          <div className='galleryDropdown'>
            <li> GALLERY</li>
            <div className='gallery_dropdown_content'>
              <li><NavLink to='/photos' className="linkStyle">Photo Gallery</NavLink></li>
              <li><NavLink to='/media' className="linkStyle" >Media Gallery</NavLink></li>

            </div></div>
          <div className='contactus_dropdown'>
            <li><NavLink to={'/contactus'} className="linkStyle">CONTACT US</NavLink></li>
            <div className='contactus_dropdown_content'>
              <li><NavLink to={'/careers'} className="linkStyle">Careers</NavLink></li>
              <li><NavLink to={'/blogs'} className="linkStyle">Blogs/News</NavLink></li>
              <li><NavLink to={'/feedback'} className="linkStyle">Suggestion / Feedback</NavLink></li>
              <li><NavLink to={'/workexperience'} className="linkStyle">Work Experience</NavLink></li>

            </div>
          </div>


        </ul>
      </div>
      <div className='connect_btn'>
       <NavLink to="/getyourworkdone" ><button className='connect_btn_style'>Get Your Work Done</button></NavLink>
      </div>
    </div>
  )
}

export default Header