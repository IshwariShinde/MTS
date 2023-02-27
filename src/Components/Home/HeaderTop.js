import React from 'react'
import '../../CSS/header_top.css'
import { FiMail, FiPhone } from "react-icons/fi";
import { AiOutlineTwitter, AiOutlineYoutube, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

const HeaderTop = () => {
  return (
    <div className='HeaderTop'>
      <div className='h_mail'>
        <div>
          <FiMail className='h_mailIcon' />
          <a href="mailto:info@mahendratechnosoft.com" className='h_mail_info' style={{marginRight:"8px"}}>info@mahendratechnosoft.com</a></div>
        <div>
          <FiPhone className='h_mailIcon' />
          <a href='' className='h_mail_info'>+91 84858 88313</a>
        </div>


      </div>
      <div className='h_social'>
        <a href='www.twitter.com' target='blank'><AiOutlineTwitter className='h_social_icon' /></a>
        <a href='https://www.youtube.com/channel/UC0NZDdRFGH32pOYbDwClMZQ' target='blank'><AiOutlineYoutube className='h_social_icon' /></a>
        <a href='https://www.facebook.com/Mahendratechnosoft/' target='blank'><AiOutlineFacebook className='h_social_icon' /></a>
        <a href='https://www.instagram.com/' target='blank'><AiOutlineInstagram className='h_social_icon' /></a>
        <a href='https://www.linkedin.com/company/mahendra-technosoft/' target='blank'><AiOutlineLinkedin className='h_social_icon' /></a>

      </div>


    </div>
  )
}

export default HeaderTop