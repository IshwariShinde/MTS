import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs} from "../../Actions/BlogAction";
import { NavLink } from 'react-router-dom'
import '../../CSS/bloglist.css'
import Adminsidebar from './Adminsidebar'

const Bloglist = () => {

  const dispatch = useDispatch();
  const blogstate = useSelector((state) => state.getAllBlogReducer);
  const { loading, blogs, error } = blogstate;
  console.log(blogs);
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  return (
    <div className='bloglist'>
      <h1>All Blogs</h1>
        <div className='bloglist_inner'>

      <Adminsidebar />
      <div className='bloglistContent'>
      <div className='adminblognav'>
      <NavLink to="/allbloglist" className="adminnavlink"> <button className='bloglist_btn'>All Blogs</button></NavLink>
    <NavLink to="/addblog" className="adminnavlink" ><button className='bloglist_btn'>Add New Blog</button></NavLink>
    </div>

    <div className='bloglistinnercontent'>
    <table>
  <thead>
    <tr>
      <th>Image</th>
      <th>Title</th>
      <th>Description</th>
      <th>Author</th>
      <th>Category</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   
        <tr>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
        </tr>
        <tr>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
        </tr>
        <tr>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
         
        </tr>
        <tr>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
        </tr>
        <tr>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
        </tr>
        <tr>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
        </tr>
        <tr>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
          <td>Global Economy</td>
        </tr>
      
    
  </tbody>
  
</table>

    </div>
      </div></div>
    </div>
  )
}

export default Bloglist