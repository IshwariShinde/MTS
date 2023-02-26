import React, { useState,useEffect, Fragment, useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Adminsidebar from './Adminsidebar'
import '../../CSS/addblog.css'
import JoditEditor from 'jodit-react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { createBlog } from '../../Actions/BlogAction'
import Loader from '../Loader'
import { MdImageSearch } from 'react-icons/md'
// import { CREATE_BLOG_RESET } from '../../constatnts/blogConstants'


const AddBlog = ({history}) => {
  const dispatch=useDispatch();
  

  // const {error,loading} = useSelector(
  //   (state) => state.blog
  // );

  const [blogTitle,setTitle] = useState('')
  const [bloggerName, setBloggername] = useState('')
  const [blogInfo ,setInfo] = useState('')
   const [images, setImage] = useState([]);
  // const [blogDate,setBlogdate]=useState('')
  // const [category,setCategory] = useState('')

  const editor = useRef(null);



  const submitBlog = (e) =>{
   e.preventDefault();
   const blogForm =  new FormData();

   blogForm.set("blogTitle",blogTitle)
   blogForm.set("bloggerName",bloggerName)
   blogForm.set("blogInfo",blogInfo)
    images.forEach((image)=> {
      blogForm.append("images",image)
      
    });
    dispatch(createBlog(blogForm));
  };

    const createBlogImageChange =(e) =>{
      const files = Array.from(e.target.files);
      setImage([]);
      
      files.forEach((file)=>{
        const reader = new FileReader();

        reader.onload =() =>{
          if(reader.readyState ===2){
            setImage((old)=>[...old,reader.result]);
          }
        };
        reader.readAsDataURL(file);
      });
    };
 
   
  //  blogForm.set("category",category)
  //  {
  //   title,authname,description,image,category
  //  }
  

 
  return (
    
     
        <div className='admincontact'>
     <Adminsidebar />
     <div className='admincontact_content'>
     {/* <h1>Add New Blog</h1> */}
     <div className='addblognav'>
     <NavLink to="/admin" className="adminnavlink"> <button className='bloglist_btn'>All Blogs</button></NavLink>
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
         <div className='blogforminput'  >
         <JoditEditor
			ref={editor}
			value={blogInfo}
      onChange={newBloginfo =>{}}/>
            {/* <input type='text' placeholder='Enter blog description' value={blogInfo} onChange={e => setInfo(e.target.value)}/> */}
         </div>
       </div> 
       <div className='bolgformrow'>
         <div className='blogformlabel'>
           <label>Image</label>
         </div>
         <div className='blogforminput'>
           <input type='file' placeholder='Add image' accept='image/*'  onChange={createBlogImageChange}/>
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
   </div>
    
  )
}

export default AddBlog