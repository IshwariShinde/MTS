import React,{useEffect} from 'react'
import '../../CSS/blog.css'
import {useDispatch} from 'react-redux'
import BlogComponent from './BlogComponent'
// import blogs from './Blogdata'
// import { NavLink } from 'react-router-dom'
import {getBlogs } from '../../Actions/BlogAction'




const blog= {
  blogImage:[{url:"https://ishwarishinde.github.io/cdn/blogimg1.jfif"}],
  blogTitle:"Global Economy and Trade Impact of COVID-19",
  bloggerName:"Smita Nikam",
  blogDate:"31/12/2020",
  blogInfo:"Covid-19 Pandamic",
  bloglink:'/blogdescription',
  _id:"isha",
}


const Blog = () => {
  

  const dispatch =useDispatch()
  // const { loading, error, blogs } = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  
console.log(getBlogs)
  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }
  //   dispatch(getBlogs());
  // }, [dispatch, error, alert]);

 
  return (
   <>
    <BlogComponent blog={blog} />
    <BlogComponent blog={blog} />
    <BlogComponent blog={blog} />
    {/* {loading ? "loading": (
    
    <div className='blog'>
      
       {blogs &&
              blogs.map((blog) => (
                <BlogComponent key={blog._id} blog={blog} />
              ))} */}
                      {/* {blogs.map(blog => (
                    
                      <BlogComponent blog={blog} />
                  

                ))} */}
      
       {/* <NavLink to='/blog1description' className="blogLink_style"><BlogComponent blogImg="https://ishwarishinde.github.io/cdn/blogimg1.jfif" blogTitle="Global Economy and Trade Impact of COVID-19" bloggerName="Smita Nikam" blogDate="31/12/2020" blogInfo="Covid-19 Pandamic"/></NavLink> 
       <NavLink to='/blog2description' className="blogLink_style"> <BlogComponent blogImg="https://ishwarishinde.github.io/cdn/blogimg2.jpg" blogTitle="Global Economy and Trade Impact of COVID-19" bloggerName="Smita Nikam" blogDate="31/12/2020" blogInfo="Covid-19 Pandamic"/></NavLink>
       <NavLink to='/blog3description' className="blogLink_style"> <BlogComponent blogImg="https://ishwarishinde.github.io/cdn/blogimg3.jfif" blogTitle="Global Economy and Trade Impact of COVID-19" bloggerName="Smita Nikam" blogDate="31/12/2020" blogInfo="Covid-19 Pandamic"/></NavLink>
        <NavLink to="/blog4description" className="blogLink_style"><BlogComponent blogImg="https://ishwarishinde.github.io/cdn/blogimg4.jfif" blogTitle="Global Economy and Trade Impact of COVID-19" bloggerName="Smita Nikam" blogDate="31/12/2020" blogInfo="Covid-19 Pandamic"/></NavLink>
        <NavLink to="/blog5description" className="blogLink_style"> <BlogComponent blogImg="https://ishwarishinde.github.io/cdn/blogimg5.jfif" blogTitle="Global Economy and Trade Impact of COVID-19" bloggerName="Smita Nikam" blogDate="31/12/2020" blogInfo="Covid-19 Pandamic"/></NavLink>
        <NavLink to="/blog6description" className="blogLink_style"><BlogComponent blogImg="https://ishwarishinde.github.io/cdn/blogimg6.jfif" blogTitle="Global Economy and Trade Impact of COVID-19" bloggerName="Smita Nikam" blogDate="31/12/2020" blogInfo="Covid-19 Pandamic"/></NavLink>
        <NavLink to="/blog7description" className="blogLink_style"><BlogComponent blogImg="https://ishwarishinde.github.io/cdn/blogimg7.jfif" blogTitle="Global Economy and Trade Impact of COVID-19" bloggerName="Smita Nikam" blogDate="31/12/2020" blogInfo="Covid-19 Pandamic"/></NavLink> */}

    {/* {/* </div>
      )} */}
      </> 
  )
}

export default Blog