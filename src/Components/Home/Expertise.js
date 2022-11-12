import React from 'react'
import '../../CSS/expertise.css'
// import Expertise1 from '../../Images/expertise1.jpg'
// import Expertise2 from '../../Images/expertise2.jpg'
import ExpertiseComponent from './ExpertiseComponent'

const Expertise = () => {
  return (
    <div className='expertise'>
      <div className='expertise_heading'> <h1>Our Expertise</h1></div>
      <div className='expertise_inner'>
       
        <ExpertiseComponent expertiseImg="https://ishwarishinde.github.io/cdn/expertise4.jpg" expertiseTitle="Custom Software" expertiseInfo="We specialize in software development that is creative and innovative for a variety of industries.This means developing cloud-native applications that can handle high volumes of traffic and data; modernizing legacy systems; and integrating AI models and service design into your current software." expertiseHeading="Custom Software" />
        <ExpertiseComponent expertiseImg="https://ishwarishinde.github.io/cdn/expertise4.jpg" expertiseTitle="Web Development" expertiseInfo=" Our specialized web development team creates bespoke websites for our clients. Our passion is in designing and building modern, responsive websites that look great on all devices with an experience that is intuitive, functional, and outstanding." expertiseHeading="Web Development"/>
        <ExpertiseComponent expertiseImg="https://ishwarishinde.github.io/cdn/expertise4.jpg" expertiseTitle="Mobile App Development" expertiseInfo="World-class mobile application development services, developing custom mobile applications that drives your business goals and brings the best solutions for your customers. Working with us, you have access to an experienced team of developers that can help you build your own world-class mobile application for any platform." expertiseHeading="Mobile App Development"/>
        <ExpertiseComponent expertiseImg="https://ishwarishinde.github.io/cdn/expertise4.jpg" expertiseTitle="Video Editing" expertiseInfo="Let us transform your raw videos into something spectacular. Leveraging the best editing software, our editors create a spellbinding story that’s objective driven. Our approach is unique to each video that’s the reason we are able to convey your message and promote your business through a rich visual experience." expertiseHeading="Video Editing"/> 
        <ExpertiseComponent expertiseImg="https://ishwarishinde.github.io/cdn/expertise4.jpg" expertiseTitle="Graphic Designing" expertiseInfo="The most comprehensive graphics design services, be it an amazing logo or eye-catching flyers, we got it covered with our team of graphic artists who deliver the right designs to make a lasting impression. Words, colours, shapes all in sync with your business objectives." expertiseHeading="Graphic Designing"/> 
        <ExpertiseComponent expertiseImg="https://ishwarishinde.github.io/cdn/expertise4.jpg" expertiseTitle="Digital Marketing" expertiseInfo="We understand that your business is unique and needs to be nurtured accordingly. Our customized digital marketing services will help you achieve your goals quickly and efficiently. Whether it is growing brand awareness, increasing leads or sales, or driving traffic, we have the right plan for you.." expertiseHeading="Digital Marketing" /> 
       </div></div>
  )
}

export default Expertise