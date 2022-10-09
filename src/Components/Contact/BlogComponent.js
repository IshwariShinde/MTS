import React from 'react'
import '../../CSS/blogComponent.css'
import { HiUser,HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";


const BlogComponent = ({blogImg,blogTitle,bloggerName,blogDate,blogInfo}) => {
  return (
    <div className='blogComponent'>
        <div class="box">
                <div class="blog_img">
                    <img  src={blogImg} alt="pageflip" className='blogImage' />
                </div>
                <div className='blogHeading'> <h1 id="blogHeading">{blogTitle}</h1></div>
                <div className='bloggerName_date'>
                  <div className='bloggerName'>
                  <HiUser/><h5>{bloggerName}</h5>
                  </div>
                  <div className='blogDate'>
                  <MdOutlineDateRange/><h5>{blogDate}</h5>
                  </div>
                  
                </div>
                <div className='blog_info'>
                    <p>{blogInfo}</p>
                  </div>
               

              

                <div className="blogNavigation">Read More<HiOutlineArrowNarrowRight/></div>
            </div>
    </div>
  )
}

export default BlogComponent