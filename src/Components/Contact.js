import React from 'react'
import ContactAdress from './Contact/ContactAdress'
import ContactForm from './Contact/ContactForm'
import '../CSS/contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact_top'>
      <div className='Contact_heading_container'>
            <p className='contact_heading'>Contact us</p>
            <p className='contact_description'>How we can help you? </p>
          </div>
      </div>
      <div className='contact_bottom'>
      <div className='contact_bottom_heading'> Get in touch with us</div>
      {/* <h2 className='contact_bottom_heading'> Get in touch with us</h2> */}
              
      <ContactAdress />
        <ContactForm/>
        </div>
      
    </div>
  )
}

export default Contact