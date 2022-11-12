import React from 'react'
import '../../CSS/blogComponent.css'
import { HiUser,HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import { NavLink } from 'react-router-dom';


const BlogComponent = ({blog}) => {
  return (
    <div className='blogComponent'>
        <div className="box">
                <div className="blog_img">
                <img src={blog.blogImage[0].url} alt={blog.blogTitle} className="blogImage"/>
                    {/* <img  src={blog.blogImage} alt="pageflip" className='blogImage' /> */}
                </div>
                <div className='blogHeading'> <h1 id="blogHeading">{blog.blogTitle}</h1></div>
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

// import React from 'react'
// import '../../CSS/blogComponent.css'
// import { HiUser,HiOutlineArrowNarrowRight } from "react-icons/hi";
// import { MdOutlineDateRange } from "react-icons/md";


// const BlogComponent = ({blogImg,blogTitle,bloggerName,blogDate,blogInfo}) => {
//   return (
//     <div className='blogComponent'>
//         <div className="box">
//                 <div className="blog_img">
//                     <img  src={blogImg} alt="pageflip" className='blogImage' />
//                 </div>
//                 <div className='blogHeading'> <h1 id="blogHeading">{blogTitle}</h1></div>
//                 <div className='bloggerName_date'>
//                   <div className='bloggerName'>
//                   <HiUser/><h5>{bloggerName}</h5>
//                   </div>
//                   <div className='blogDate'>
//                   <MdOutlineDateRange/><h5>{blogDate}</h5>
//                   </div>
                  
//                 </div>
//                 <div className='blog_info'>
//                     <p>{blogInfo}</p>
//                   </div>
               

              

//                 <div className="blogNavigation">Read More<HiOutlineArrowNarrowRight/></div>
//             </div>
//     </div>
//   )
// }

// export default BlogComponent