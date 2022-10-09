import React from 'react'
import { HiUser } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import '../../CSS/blog7.css'

const Blog7 = () => {
  return (
    <div className='blog7'>
         <div className='blog_container'>
            <div className='blogContainer_img'>
                <img src="https://ishwarishinde.github.io/cdn/blogimg7.jfif" alt="img" className='blogContainer_imgInner'/>
            </div>
            <div className='blogContainer_content'>
                <h1>Technology is bringing Quality,Low-Cost Education to Everyone</h1>
                <div className='blogContainer_blogInfo'>
                    <div className='blogContainer_bloggerInfo' ><HiUser /><h5>Rohini Aher</h5></div>
                <div className='blogContainer_blogDate'><MdOutlineDateRange/><h5>12/31/2020</h5></div>
                </div>
                <div className='blogContainer_contentInfo'>
                    <p>Today due to technological advancements in the field of science and information technology, it is not only benefiting the businesses but also transforming the traditional method of imparting education to everyone. Can Technology be afforded by everyone? Technology has surpassed the expectations of businesses in every field today let it be marketing, sales, monitoring, security, infrastructure or automobile because of its precision and competency to outperform in every walk of life to support the well-being of society.</p>
                    <p>
                    We are all the time hovered by the scientific applications and machinery that makes our lives easy. For instance, Mobile Devices make calls which were not even possible back in 1980s. Diagnosis of ailments in human beings induced the development of sophisticated devices to carry out surgeries discreetly. Top class infrastructures offering scenic view of the city along with multivarious facilities such as hotels, gymnasium, recreation rooms, clubs etc. The Burj Khalifa,a skyscraper in Dubai is regarded as the tallest structure in the world. </p>
                    <p>Scientific development has enabled the easy access of technology to a common man in multifarious ways. As we all know, education and upskilling oneself is the dire need to survive in this competitive environment. Technology complements to achieve it by offering quick access to reading materials via the Internet through several educational websites. Moreover, in India surprisingly internet has become really affordable due to cut throat competition among the telecom players to sustain in the market. It has helped the general public directly.</p>
                  
                    <p>Hence, there are multiple startups to provide quality education such as BYJU, Educart,Udemy, Coursera etc which offers intelligently planned curriculum of various courses for students, working professionals and entrepreneurs at affordable cost Moreover, technology has promoted a trend of online mode of classes for delivering the lectures through applications like Zoom, WebEx Meetings, Skype etc at no or minimal cost.</p>
                    <p>Conclusively, technology facilitates to offer of low-cost quality education to every section of society.  </p>
                    
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Blog7