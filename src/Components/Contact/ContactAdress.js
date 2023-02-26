import React from 'react'
import '../../CSS/contactAdress.css';
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";
const ContactAdress = () => {
  return (
    <div className='contact_Address'>
      <div className='contact_address_block'>
        <MdLocationOn className='contactAddress_icon'/>
        <h5>Address</h5>
        <div>
          <p className='address_style'>
            <b>Mahendra Techno-Soft Pvt.Ltd</b><br/>
            Office No. 202
            Trescent Park<br></br>
            Pan_Card Club Road
            Landmark- Near Westport<br></br>
            Baner-Pune 411045, Maharashtra, India.</p></div>

      </div>
      <div className='contact_address_block'>
        <MdLocalPhone className='contactAddress_icon'/>
        <h5>Phone</h5>
        <p>+91 84858 88313</p>
      </div>
      <div className='contact_address_block'>
        <MdEmail className='contactAddress_icon'/>
        <h5>Email</h5>
        <p>info@mahendratechnosoft.com</p>
      </div>
    </div>
  
  )
}

export default ContactAdress