import React from 'react'
import '../../CSS/blogdescription.css'
import { HiUser } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";

const BlogDescription = ({blog}) => {
  return (
    <div className='BlogDescription'>
        <div className='blog_container'>
            <div className='blogContainer_img'>
                <img src="https://ishwarishinde.github.io/cdn/blogimg1.jfif" alt="img" className='blogContainer_imgInner'/>
            </div>
            <div className='blogContainer_content'>
                <h1>{blog.blogTitle}</h1>
                <div className='blogContainer_blogInfo'>
                    <div className='blogContainer_bloggerInfo' ><HiUser /><h5>{blog.bloggerName}</h5></div>
                <div className='blogContainer_blogDate'><MdOutlineDateRange/><h5>{blog.blogDate}</h5></div>
                </div>
                <div className='blogContainer_contentInfo'>
                   <p>{blog.blogDescription}</p>
                </div>
               
            </div>
        </div>

    </div>
  )
}

export default BlogDescription