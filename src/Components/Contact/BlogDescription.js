
import React, { Fragment, useEffect } from 'react'
import '../../CSS/blogdescription.css'
import { HiUser } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import { getBlogDetails, clearErrors } from "../../Actions/BlogAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../layout/loader/loader'
import { useParams } from 'react-router-dom';
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon } from "react-share";
// import {format} from 'date-fns'


const BlogDescription = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { blog, loading, error } = useSelector((state) => state.blog)
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getBlogDetails(params.id))
  }, [dispatch, params.id, error]);


  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className='BlogDescription'>
            <div className='bloginner_title'>
              <h1 >{blog.blogTitle}</h1></div>
            <div className='blog_container'>
              <div className='blog_Container_top_warapper'>
                <div className='blogContainer_blogInfo'>
                  <div className='blogContainer_bloggerInfo' ><HiUser className='blogInfo_icon_styling'/><h5>{blog.bloggerName}</h5></div>
                  <div className='blogContainer_blogDate'><MdOutlineDateRange className='blogInfo_icon_styling'/><h5>{blog.blogDate}</h5></div>
                </div>
                <div className='blogShare'>
                  <h2>SHARE</h2>
                  <div className='blogshare_btn'>
                    <FacebookShareButton url="https://www.facebook.com/sharer.php?u=[post-url]" className='blogshare_btn_Styling' >
                      <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url="https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]" className='blogshare_btn_Styling'>
                      <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <LinkedinShareButton url="https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]" className='blogshare_btn_Styling'>
                      <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>
                    <EmailShareButton url="https://www.facebook.com/sharer.php?u=[post-url]" className='blogshare_btn_Styling'>
                      <EmailIcon size={32} round={true} />
                    </EmailShareButton>

                  </div>
                </div>
              </div>
              <hr className='hr_style' />
              <div className='blogContainer_imgWrapper'>
                {blog.images &&
                  blog.images.map((item, i) => (
                    <img
                      className="blogContainer_imgInner"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}</div>
             


                <div className='blogContainer_contentInfo'>
                  <p dangerouslySetInnerHTML={{ __html: blog.content }}></p>
                </div>
      
             
            </div>

          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default BlogDescription;




