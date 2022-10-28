import React from 'react'
import '../../CSS/servicecontact.css'
import { NavLink } from 'react-router-dom'

const ServiceContact = () => {
  return (
    <div>
        <div className='Service_contact'>
          <div className='Service_contact_inner'>
          <p>Book a call with us today and find out how we can help you<br></br> grow your business.</p>
          <NavLink to="/getyourworkdone" ><button className='connect_btn_style  Service_contact_btn'>Let's Connect</button></NavLink>
        </div></div>
    </div>
  )
}

export default ServiceContact