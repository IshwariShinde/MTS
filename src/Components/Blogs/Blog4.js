import React from 'react'
import { HiUser } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import '../../CSS/blog4.css'

const Blog4 = () => {
  return (
    <div className='blog4'>
        <div className='blog_container'>
            <div className='blogContainer_img'>
                <img src="https://ishwarishinde.github.io/cdn/blogimg4.jfif" alt="img" className='blogContainer_imgInner'/>
            </div>
            <div className='blogContainer_content'>
                <h1>How COVID-19 Spreads</h1>
                <div className='blogContainer_blogInfo'>
                    <div className='blogContainer_bloggerInfo' ><HiUser /><h5>Rahul Kolpe</h5></div>
                <div className='blogContainer_blogDate'><MdOutlineDateRange/><h5>12/31/2020</h5></div>
                </div>
                <div className='blogContainer_contentInfo'>
                    <p>COVID-19 or Novel Coronavirus is a new disease that can spread from Person-to-Person or can be spread from contact with the contaminated surfaces or Objects.</p>
                    <p>
The risk of Spreading is entirely dependent on where you are and more specifically, whether there are any COVID-19 symptomatic people around.</p>
                    <p>People in most of the locations have a very minimal risk of catching COVID-19. However, the virus being declared a Pandemic by WHO now has many places around the world where it is spreading like a Fire. People living in these areas or the visitors are at a higher risk of catching COVID-19. Governments and health authorities across Globe are taking vivacious actions every time a new case of this Virus is been identified. </p>
                    <p>The virus is said to be spread primarily from person-to-person.</p>
                    <p>Between people who are in close contact with each other (within about 6 feet).

This spreads through respiratory droplets of an already infected person when they cough, sneeze or talk.

These droplets can then be inhaled into the lungs through the nose or mouth of people who are nearby.

Some recent studies have suggested that this virus may be spread by people who have no symptoms at all.

The Social distancing of about 6 feet is very important in preventing the spread of COVID-19.</p>
                    <p>It is also possible that a person can be infected by COVID-19 by touching an object or a surface that has the virus on it and then by touching their own nose, eyes, or possibly their mouth. However, this is not the main way the virus spreads, The best recommendation for people is to practice frequent “hand sanitation,” by either their hands with soaps or by the use of an alcohol-based hand rub. </p>
                    <p>Coronavirus impacting 208 countries with more than 1 million cases worldwide and 51,000 confirmed deaths, countries globally are trying to find a vaccine against Coronavirus. About 35 companies and academic institutions are working hard to create such a Vaccine, among which few have been testing in animals and many racing to enter human trails stage which will be followed by regulatory approvals. Even if the vaccine is found, there would be other cumbersome stages such as mass production and manage the supply chain.</p>
                    <p>Until the world finds the solution to combat this virus, health care providers across the globe are advising to manage personal hygiene, self-isolation, social distancing, to be alert and be careful. </p>
                    
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Blog4