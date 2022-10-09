import React from 'react'
import '../../CSS/contactAdress.css';

const ContactAdress = () => {
  return (
    <div className='contactAdress'>
        <div className='contactAdress_heading'> 
        <h1>Office Address</h1>
        </div>
       
        <div className='contactAdress_inner'>
        <div className='contact_left'>
            <h3>Mahendra Techno-Soft Pvt.Ltd</h3>
            <p>Office No. 202<br></br>
                Trescent Park<br></br>
             Pan_Card Club Road<br></br>
             Landmark- Near Westport<br></br>
                Baner-Pune 411045, Maharashtra, India.</p>
        </div>
        <div className='contact_right'>
            <p className='gMap'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3107144020723!2d73.79038361484336!3d18.56002548738604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295688a9a5b79%3A0x575c50ad6bbf51f0!2sMAHENDRA%20TECHNOSOFT%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1662550282369!5m2!1sen!2sin"    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='gmap' height="350px" width="998px" className='gMap'></iframe></p>
        </div>
        </div>
        
    </div>
  )
}

export default ContactAdress