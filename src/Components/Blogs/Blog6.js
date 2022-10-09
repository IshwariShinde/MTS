import React from 'react'
import { HiUser } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import '../../CSS/blog6.css'

const Blog6 = () => {
  return (
    <div className='blog6'>
         <div className='blog_container'>
            <div className='blogContainer_img'>
                <img src="https://ishwarishinde.github.io/cdn/blogimg6.jfif" alt="img" className='blogContainer_imgInner'/>
            </div>
            <div className='blogContainer_content'>
                <h1>How Fresher can start career in the field of Data Analysis or Big Data</h1>
                <div className='blogContainer_blogInfo'>
                    <div className='blogContainer_bloggerInfo' ><HiUser /><h5>Mivaan Nikam</h5></div>
                <div className='blogContainer_blogDate'><MdOutlineDateRange/><h5>12/31/2020</h5></div>
                </div>
                <div className='blogContainer_contentInfo'>
                    <p>In recent years, almost all the multinationals and mid-sized industries are keen interested in analyzing their data collected through multiple sources. This sudden shift of focus from a traditional empirical approach to in-depth data analysis for business has to lead to an altogether different set of roles and responsibilities along with respective designation to the ones possessing such skills in the organization.</p>
                    <p>
                    Precisely, data analysis is a field of data science dealing with an enormous amount of business data measured in terabytes and petabytes also known as Big Data to extract relevant data that can be engineered to study correlation and patterns within data to yield underneath information crucial for business.</p>
                    <p>Does Data Analysis create better employment opportunities? This new branch of science I.e. Data Science is widely adopted by Universities and colleges in their curriculum to have their students future-ready as per the current market trend and job opportunities. Students graduating currently from colleges/universities already appreciate the responsibilities of a data analyst. Moreover, employers are also conducting hiring hackathons for freshers to assess their data analysis skills and reward the outstanding performers for an internship followed by a full-time job opportunity. There is a gradual increase in demand for Data Scientists and Data Analysts every quarter for the past few years yet it is expected to grow in the future.</p>
                  
                    <p>The role of Data Scientists or Analyst in a company is a reputed role with a handsome take-away salary that is a major cause of attraction not only for the recent graduates to kick-off their career in this field but also experienced professionals are keen to work in this profile. For the sake of meeting the growing demand in this field, many educational institutes in collaboration with renowned Universities are offering diploma programs to educate the working professionals and freshers for a better future.</p>
                    <p>Conclusively, a well educated fresher or even an experienced professional can make a career in data analysis if he is acute interested in this field of study. </p>
                    
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Blog6