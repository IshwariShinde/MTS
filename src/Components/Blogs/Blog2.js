import React from 'react'
import { HiUser } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import '../../CSS/blog2.css'
import '../../CSS/blog1.css'

const Blog2 = () => {
  return (
    <div className='blog2'>
        <div className='blog_container'>
            <div className='blogContainer_img'>
                <img src="https://ishwarishinde.github.io/cdn/blogimg2.jpg" alt="img" className='blogContainer_imgInner'/>
            </div>
            <div className='blogContainer_content'>
                <h1>What are global healthcare agencies doing to combat this global virus scare?</h1>
                <div className='blogContainer_blogInfo'>
                    <div className='blogContainer_bloggerInfo' ><HiUser /><h5>Rahul Kolpe</h5></div>
                <div className='blogContainer_blogDate'><MdOutlineDateRange/><h5>12/31/2020</h5></div>
                </div>
                <div className='blogContainer_contentInfo'>
                    <p>Novel Coronavirus (nCoV) is a new strain of coronavirus that was reported on 31 December 2019 for the first time from Wuhan city, Hubei Province of China. In humans, they are known to cause respiratory infections, from the common cold to severe diseases.</p>
                    <p>The quick spread of the coronavirus has caught the world’s attention. Harmful as it may be, this tiny virus is an urgent reminder of our collective vulnerability to international threats — and of the urgency of common cause to protect the health of people everywhere.</p>
                    <p>The COVID-19 pandemic is spraining health systems worldwide. The constant increase of demand on health facilities and health care workers impends to leave some health systems overstressed and unable to operate effectively.</p>
                    <p>As per WHO the best defense against this outbreak is a strong health system. Countries around the globe are strengthening their health care facilities to meet the needs of their people.</p>
                    <p>Social distancing is the primary measure suggested by healthcare agencies across the world as the best defense against COVID-19’. Where social distancing means less contact between you and other people. COVID-19 is more likely to spread from human-to-human through close contact with affected persons or persons with symptoms. So, the more the space amongst two individuals, the harder it is for the virus to spread</p>
                    <p>To help countries steer through these challenges, WHO releases guidelines to help countries maintain essential health services during the COVID-19 pandemic which includes a set of immediate actions targeted at the national, regional and local levels to reorganize and maintain access to essential healthcare services for all.</p>
                    <p>Coronavirus impacting 208 countries with more than 1 million cases worldwide and 51,000 confirmed deaths, countries globally are trying to find a vaccine against Coronavirus. About 35 companies and academic institutions are working hard to create such a Vaccine, among which few have been testing in animals and many racing to enter human trails stage which will be followed by regulatory approvals. Even if the vaccine is found, there would be other cumbersome stages such as mass production and manage the supply chain.</p>
                    <p>Until the world finds the solution to combat this virus, health care providers across the globe are advising to manage personal hygiene, self-isolation, social distancing, to be alert and be careful. </p>
                    
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Blog2