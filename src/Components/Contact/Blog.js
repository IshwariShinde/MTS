import React, {Fragment, useEffect, useState} from 'react'
import '../../CSS/blog.css'
import BlogComponent from './BlogComponent'
import { clearErrors,getBlogs } from '../../Actions/BlogAction'
import {useDispatch, useSelector} from "react-redux";
import Loader from '../layout/loader/loader'



const Blog = () => {
  const dispatch = useDispatch();
  const { blogs, loading,error} = useSelector((state)=>state.blogs);
  const [category, setCategory] = useState(blogs);
  const filterResult=(catItem) =>{
    const result=blogs.filter((curData)=>{
      return curData.category===catItem
    });
    setCategory(result)
  }
  useEffect(()=>{
    if(error) {
      dispatch(clearErrors());
    }
    dispatch(getBlogs());
  },[dispatch,error]);
 
  return (
    <Fragment>
    {loading ? (
      <Loader />
    ):(
      <Fragment>
        <div className='blog_top'>
        <div className='blog_heading_container'>
            <p className='blog_heading'>MTechno-Soft blogs</p>
            <p className='blog_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm. </p>
          </div>
        </div>
        <div className='blog_wrapper'>
          <div className='blog_category'>
      <div className='blog_category_inner'>
        <h2>Blog Category</h2>
        <span className='blogCategoryLine'></span>
              <button onClick={()=>setCategory(blogs)} className="category_btn">All</button>
              <span className='blogCategorybtnLine'></span>
              <button onClick={()=>filterResult('Technology')} className="category_btn">Technology</button>
              <span className='blogCategorybtnLine'></span>
              <button onClick={()=>filterResult('Enterprenurship')} className="category_btn">Enterprenurship</button>
              <span className='blogCategorybtnLine'></span>
              <button onClick={()=>filterResult('Business')} className="category_btn">Business</button>
              <span className='blogCategorybtnLine'></span>
              <button onClick={()=>filterResult('Marketing')} className="category_btn">Marketing</button>
              <span className='blogCategorybtnLine'></span>
              <button onClick={()=>filterResult('Career')} className="category_btn">Careers</button>
              <span className='blogCategorybtnLine'></span>
              </div>
          </div>
       <div className="blogs">
        {category.map((blog)=>(
          <BlogComponent key={blog._id} blog = {blog}/>
        ))}
       </div>
       </div>

   
     
    
   
    </Fragment>
    )}
    </Fragment>
  )
}

export default Blog;




