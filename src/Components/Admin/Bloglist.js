import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../Actions/BlogAction";
import { NavLink } from 'react-router-dom'
import '../../CSS/bloglist.css'
import Adminsidebar from './Adminsidebar'

const Bloglist = () => {

  const dispatch = useDispatch();
  const { error, blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  return (
    <div className='admincontact'>

      <Adminsidebar />
      <div className='bloglistContent'>
      <div className='adminblognav'>

        
      <NavLink to="/admin" className="adminnavlink"> <button className='bloglist_btn'>All Blogs</button></NavLink>
    <NavLink to="/addblog" className="adminnavlink" ><button className='bloglist_btn'>Add New Blog</button></NavLink>
    </div>

    <div className='admincontact_content'>
    <h1>All Blogs</h1>
    <table>
  <thead>
    <tr>
      {/* <th>Image</th> */}
      <th>Title</th>
      <th>Description</th>
      <th>Author</th>
      <th>Category</th>
      {/* <th>Action</th> */}
    </tr>
  </thead>
 
   
  <tbody>
              {blogs &&
                blogs.map((blog) => (
                  <tr>
                    {/* <td>
                      <img
                        src={blog.images[0].url}
                        alt="logo"
                        width="100px"
                        height="100px"
                      />
                    </td> */}
                    <td>{blog.blogTitle}</td>
                    <td>{blog.bloggerName}</td>
                    <td>{blog.blogDate}</td>
                    <td>{blog.blogInfo}</td>
                  
                    
                  </tr>
                ))}
            </tbody>
  
</table>

    </div>
      </div></div>
 
  )
}

export default Bloglist