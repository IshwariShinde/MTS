import React from 'react'
import '../../CSS/webdevelopment.css'
import ServiceContact from './ServiceContact'
import WebDevProcess from './WebDevProcess'

const WebDevelopment = () => {
  return (
    <div className='WebDevelopment'>
        <div className='webdev_top'>
        <div className='webdev_heading_container '>
            <p className='web_heading animate__animated  animate__fadeInUp'>Web Development</p>
            <p className='web_description animate__animated  animate__fadeInUp'>No stone left unturned in our quest to create a great experience for users.</p>
          </div>

        </div>

        <div className='webdev_tagline'>
        <p>Our web development services are designed to help create a great experience for web users. We work to professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates.</p>
        </div>

        <div className='webdev_process'>
          <h1>Our Process</h1>
          <div className='webdev_process_inner'>
            <div className='webdev_process_inner_row'>
            <WebDevProcess webprocessicon="https://ishwarishinde.github.io/cdn/WD1.png" webprocesstitle="Planning" webprocessdescription="A full understanding of the purpose and intent of your site. We do our due diligence in terms of analysis and research so that we can provide you with the best possible outcome." webprocessNo="1" />
            <WebDevProcess webprocessicon="https://ishwarishinde.github.io/cdn/WD2.png" webprocesstitle="Wireframing" webprocessdescription="Your website's design dictates the journey your visitors will take as they explore your site. We bring together the various elements to ensure a smooth and enjoyable experience for all who visit." webprocessNo="2" />
            <WebDevProcess webprocessicon="https://ishwarishinde.github.io/cdn/WD3.png" webprocesstitle="Creating Content" webprocessdescription="Our content creators at work, penning down SEO optimized content for your site. We help you improve your user experience and give you an edge over your competition with our words." webprocessNo="3" /></div>
            <div className='webdev_process_inner_row'>
            <WebDevProcess webprocessicon="https://ishwarishinde.github.io/cdn/WD4.png" webprocesstitle="Development" webprocessdescription="Not just simply understanding the requirements of the job, but willing to go the extra mile for our client, our developers build a site that is safe and secure and, in the process, ensuring a great user experience.." webprocessNo="4" />
            <WebDevProcess webprocessicon="https://ishwarishinde.github.io/cdn/WD5.png" webprocesstitle="Testing" webprocessdescription="We make sure your site is functional before launch. This means we check everything from images to links and even the code. With the right tools we make sure that the site runs smoothly and looks great!" webprocessNo="5" />
            <WebDevProcess webprocessicon="https://ishwarishinde.github.io/cdn/WD6.png" webprocesstitle="Launch" webprocessdescription="A full understanding of the purpose and intent of your site. We do our due diligence in terms of analysis and research so that we can provide you with the best possible outcome." webprocessNo="6" /></div>
          </div>
        </div>

        

        <div className='webdev_whyus'>
          <div className='webdev_whyus_left'>
            <h1>Why Choose Us?</h1>
            <p className='web_quoteline'></p>
          </div>
          <div className='webdev_whyus_right'>
            <p>Websites developed by us will help increase your online sales and leads. Functionalities incorporated, plugins and tools will not only be efficient but also promote your marketing needs and make your workflows more efficient!</p>
          </div>
        </div>

        <div className='webdev_bottom'>
          <div className='webdev_bottom_left'>
          <h1>What can you expect from us…</h1>
          <p className='web_quoteline'></p>
          </div>
          <div className='webdev_bottom_right'><p>We specialize in creating digital experiences that are not only visually appealing but also user-friendly and enjoyable. We achieve this by basing our concepts off of extensive business analysis and putting a priority on Intuitive UX design to reduce the amount of user errors as well as bounced rates. Our modern UI designs maintain a focus on increasing engagement and conversions while still providing a smooth experience. Furthermore, we keep our web solutions updated with the latest trends, so you never have to worry about falling behind.</p>
          </div>
        </div>

        <ServiceContact />
    </div>
  )
}

export default WebDevelopment
