import React from 'react'
import '../../CSS/contentAuditing.css'
import ContentAuditComponent from './ContentAuditComponent'
import ServiceContact from './ServiceContact'

const ContentAuditing = () => {
  return (
    <div className='contentauditing'>
        <div className='contentauditing_top'>
          <div className='contentauditing_heading_container '>
            <p className='contentauditing_heading animate__animated  animate__fadeInUp'>Content Auditing Services</p>
  
          </div>
        </div>


        <div className='customsoftware_mid ' >
        
          
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate </p>
         </div>

         <div className='contentaudit_whatwedo'>
          <div className='contentaudit_whatwedo_inner'>
          <div className='contentaudit_whatwedo_left'>
            <img src='https://ishwarishinde.github.io/cdn/dummy5.jpg' alt='img' className='audit_img'/>
          </div>
          <div className='contentaudit_whatwedo_right'>
            <h1>Lorem ipsum dolor</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='audit_style'></div>
          </div>
         </div>


         <div className='webdev_whyus'>
          <div className='webdev_whyus_left'>
            <h1>Why your Business needs Content Audit Services?</h1>
            <p className='web_quoteline'></p>
          </div>
          <div className='webdev_whyus_right'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui of</p>
          </div>
        </div>


    <div className='audit_benefits'>
        <div className='auditbenefit_content'>
      <h1>Benefits Of Content Audit</h1>
      <div className='aauditbenefit_inner'>
            <div className=' audit_card'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            <div className='audit_card'>
              
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            <div className='audit_card'>
              
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            <div className='audit_card'>
             
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            </div>

        </div>

    </div>
    <div className='contentaudit_services'>
      <h1>Content Auditing Services We Offer</h1>
      <div className='contentaudit_services_inner'>
      <ContentAuditComponent/>
      <ContentAuditComponent/>
      <ContentAuditComponent/>
      <ContentAuditComponent/>
      <ContentAuditComponent/>
      <ContentAuditComponent/>

      </div>
    </div>

    <div className='audit_whyUs'>
      <div className='audit_whyUs_inner'>
        <h1>Why Us?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui of</p>
      </div>
    </div>

    <ServiceContact/>
    </div>
  )
}

export default ContentAuditing