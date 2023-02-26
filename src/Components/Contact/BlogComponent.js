import React from 'react'
import '../../CSS/blogComponent.css'
import {Link} from "react-router-dom";
import { HiUser,HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import {format} from 'date-fns'



const BlogComponent = ({blog})=>{
  const blogDate=new Date()
  return (
    <Link to ={`/blog/${blog._id}`} className="blogComponent_Link">

    <div className='blogComponent'>
        <div className="box">
                <div className="blog_img">
                    <img  src={blog.images[0].url} alt={blog.blogTitle} className='blogImage' />
                </div>
                <div className='blogCategory'>
                  <h5>{blog.category}</h5>
                </div>
                <div className='blogHeading'> <h1 id="blogHeading">{blog.blogTitle}</h1></div>
                <div className='bloggerName_date'>
                  <div className='bloggerName'>
                  <HiUser className=' bloggernamedate_icon'/><h5>{blog.bloggerName}</h5>
                  </div>
                  <div className='blogDate'>
                  <MdOutlineDateRange className=' bloggernamedate_icon'/><h5>
                  {format(blogDate, 'dd/mm/yyyy')}</h5>
                  
                  </div>
                  
                </div>
                <div className='blog_info'>
                    <p>{blog.blogInfo}</p>
                  </div>
               

              

                <NavLink to={`/blog/${blog._id}`} className="blogNavigation">Read More<HiOutlineArrowNarrowRight/></NavLink>
              
            </div>
    </div>
    </Link>
  )
}

export default BlogComponent





