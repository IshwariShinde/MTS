import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Adminsidebar from './Adminsidebar'
import '../../CSS/addblog.css'
import { clearErrors, createBlog } from '../../Actions/BlogAction'
import { CREATE_BLOG_RESET } from '../../constatnts/blogConstants'


const AddBlog = ({history}) => {

  const [blogTitle,setTitle] = useState('')
  const [bloggerName, setBloggername] = useState('')
  const [blogInfo ,setInfo] = useState('')
  const [blogImage, setImage] = useState('')
  const [blogDate,setBlogdate]=useState('')
  // const [category,setCategory] = useState('')


  const { loading, error, success } = useSelector((state) => state.addBlog);
 
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Blog Created Successfully");
      history.push("/adminblogs");
      dispatch({ type: CREATE_BLOG_RESET });
    }
  }, [dispatch, alert, error, history, success]);


  
  const dispatch=useDispatch()


  // const createProductSubmitHandler = (e) => {
  //   e.preventDefault();

  //   const myForm = new FormData();

  //   myForm.set("name", name);
  //   myForm.set("price", price);
  //   myForm.set("description", description);
  //   myForm.set("category", category);
  //   myForm.set("Stock", Stock);

  //   images.forEach((image) => {
  //     myForm.append("images", image);
  //   });
  //   dispatch(createProduct(myForm));
  // };

  const submitBlog = (e) =>{
   e.preventDefault();
   const blogForm =  new FormData();

   blogForm.set("blogTitle",blogTitle)
   blogForm.set("bloggerName",bloggerName)
   blogForm.set("blogInfo",blogInfo)
   blogForm.set("blogImage",blogImage)
   blogForm.set("blogImage",blogImage)
  //  blogForm.set("category",category)
  //  {
  //   title,authname,description,image,category
  //  }
   dispatch(createBlog(blogForm));
  }
  return (
    <div className='bloglist'>
     
      <h1>Add New Blog</h1>
      <div className='bloglist_inner'>
      <Adminsidebar />
      <div className='bloglistContent'>
      <div className='adminblognav'>
      <NavLink to="/allbloglist" className="adminnavlink"> <button className='bloglist_btn'>All Blogs</button></NavLink>
    <NavLink to="/addblog"  className="adminnavlink"><button className='bloglist_btn'>Add New Blog</button></NavLink>
               
    </div>
    <div className='bloglistinnercontent'>
      
      <form onSubmit={submitBlog}>
        <div className='bolgformrow'>
          <div className='blogformlabel'>
            <label>Blog Title</label>
          </div>
          <div className='blogforminput'>
            <input type='text' placeholder='Enter blog title' value={blogTitle} onChange={e => setTitle(e.target.value)} />
          </div>
        </div>
        <div className='bolgformrow'>
          <div className='blogformlabel'>
            <label>Author Name</label>
          </div>
          <div className='blogforminput'>
            <input type='text' placeholder='Enter author name' value={bloggerName} onChange={e => setBloggername(e.target.value)}/>
          </div>
        </div>
        <div className='bolgformrow'>
          <div className='blogformlabel'>
            <label>Description</label>
          </div>
          <div className='blogforminput'>
            <input type='text' placeholder='Enter blog description' value={blogInfo} onChange={e => setInfo(e.target.value)}/>
          </div>
        </div>
        <div className='bolgformrow'>
          <div className='blogformlabel'>
            <label>Image</label>
          </div>
          <div className='blogforminput'>
            <input type='text' placeholder='Enter image url' value={blogImage} onChange={e => setImage(e.target.value)}/>
          </div>
        </div>
        {/* <div className='bolgformrow'>
          <div className='blogformlabel'>
            <label>Category</label>
          </div>
          <div className='blogforminput'>
            <input type='text' placeholder='Enter blog category' value={category} onChange={e => setCategory(e.target.value)}/>
          </div>
        </div> */}

        <button className='blogform_btn' type='submit'>Add New Blog</button>
       
      </form>
    </div>

      </div>
    </div></div>
  )
}

export default AddBlog