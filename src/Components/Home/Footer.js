import React from 'react'
import '../../CSS/footer.css'
import { AiOutlineTwitter,AiOutlineYoutube,AiOutlineFacebook,AiOutlineLinkedin,AiOutlineInstagram} from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='content_above'>
            <div className='company_info'>
        <div className='footer_logo'>
          <img src="https://ishwarishinde.github.io/cdn/logo.png" alt="logo" className="logo_resize"/>
        </div>
        <div className='company_address'>
            <p>Office No. 202<br></br>
                Trescent Park<br></br>
             Pan_Card Club Road<br></br>
             Landmark- Near Westport<br></br>
                Baner-Pune 411045, Maharashtra, India.</p>
        </div>
        <div className='footer_contact'>
            <p>Phone:+91 84858 88313</p>
            <p className='footer_email'>Email: info@mahendratechnosoft.com</p>
        </div>
            </div>
            <div className='useful_links'>
            <div className='footer_heading'>
                <h4>Useful Links</h4>
            </div>
                <ul className='footer-nav-items'>
                    <li>Home</li>
                    <li>Anout us</li>
                    <li>Contact</li>
                    <li>Career</li>
                    <li>Pay Here</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className='footer_services'>
            <div className='footer_heading'>
                <h4>Our Services</h4>
            </div>
            <ul className='footer-nav-items'>
                    <li>Universal Freelancers</li>
                    <li>Job Tricks</li>
                    <li>Product Management</li>
                    <li>Career</li>
                    <li>Marketing</li>
                    <li>Graphic Design</li>
                </ul>
            </div>
            <div className='newsletter'>
            <div className='footer_heading'>
                <h4>Join Our Newsletter</h4>
            </div>
            <p>Subscribe to receive our Newsletter</p>
            <div className='social_Links'>
             <a href='https://www.linkedin.com/company/mahendra-technosoft/' target='blank'><AiOutlineLinkedin className='contact_icon'/> </a>
             
              <a href='www.twitter.com' target='blank'><AiOutlineTwitter className='contact_icon' /></a>
              <a href='https://www.youtube.com/channel/UC0NZDdRFGH32pOYbDwClMZQ' target='blank'><AiOutlineYoutube className='contact_icon' /></a>
              <a href='https://www.facebook.com/Mahendratechnosoft/' target='blank'><AiOutlineFacebook className='contact_icon' /></a>
              <a href='https://www.instagram.com/' target='blank'><AiOutlineInstagram className='contact_icon' /></a>
            
          
            </div>
            </div>

        </div>
        <div className='content_below'>
            <p>© Copyright Mahendra Technosoft Pvt. Ltd. All Rights Reserved</p>
            <p>Designed by Mahendra Technosoft Pvt. Ltd</p>

        </div>
    </div>
  )
}

export default Footer