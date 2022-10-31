import React from 'react'
import '../../CSS/blogComponent.css'
import { HiUser,HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import { NavLink } from 'react-router-dom';


const BlogComponent = ({blog}) => {
  return (
    <div className='blogComponent'>
        <div class="box">
                <div class="blog_img">
                    <img  src={blog.image} alt="pageflip" className='blogImage' />
                </div>
                <div className='blogHeading'> <h1 id="blogHeading">{blog.title}</h1></div>
                <div className='bloggerName_date'>
                  <div className='bloggerName'>
                  <HiUser/><h5>{blog.bloggerName}</h5>
                  </div>
                  <div className='blogDate'>
                  <MdOutlineDateRange/><h5>{blog.blogDate}</h5>
                  </div>
                  
                </div>
                <div className='blog_info'>
                    <p>{blog.blogInfo}</p>
                  </div>
               

              

                  <div className="blogNavigation"> <NavLink to={blog.bloglink} className="blogLink_style">Read More<HiOutlineArrowNarrowRight/></NavLink></div>
            </div>
    </div>
  )
}

export default BlogComponent