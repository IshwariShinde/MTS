import React from 'react'
import ContactAdress from './Contact/ContactAdress'
import ContactForm from './Contact/ContactForm'
import '../CSS/contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <ContactForm/>
        <ContactAdress />
    </div>
  )
}

export default Contact