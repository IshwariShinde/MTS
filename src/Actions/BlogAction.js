import axios from "axios";
import{
 ALL_BLOG_REQUEST ,
 ALL_BLOG_SUCCESS,
 ALL_BLOG_FAIL,
 CREATE_BLOG_REQUEST,
 CREATE_BLOG_SUCCESS,
 CREATE_BLOG_FAIL,
 DELETE_BLOG_REQUEST,
 DELETE_BLOG_SUCCESS,
 DELETE_BLOG_FAIL,
CLEAR_ERRORS,
GET_BLOG_REQUEST,
GET_BLOG_SUCCESS,
GET_BLOG_FAIL, 
} from "../constatnts/blogConstants"



export const getBlogs = ()=> async(dispatch)=>{
    try{
        dispatch({
            type:ALL_BLOG_REQUEST
        });
        const {data} = await axios.get("/api/v1/blogs");
    dispatch({
        type:ALL_BLOG_SUCCESS,
        payload:data,
    });

    } catch(error){
    dispatch({
        type:ALL_BLOG_FAIL,
        payload:error.response.data.message,
    });
    }


};



export const clearErrors = ()=> async(dispatch)=>{
dispatch({
    type:CLEAR_ERRORS
});

}

export const createBlog = (blogData) =>async(dispatch)=>{
    try {dispatch({type:CREATE_BLOG_REQUEST});

    const config ={
        headers : {"Content-Type":"application/json"},
    };
    const {data} = await axios.post(
        `/api/v1/blog/new`,
        blogData,
        config
    );
    dispatch({
        type:CREATE_BLOG_SUCCESS,
        payload:data,

    });
}
catch(error){
    dispatch({
        type:CREATE_BLOG_FAIL,
        payload:error.response.data.message,
    });
}
};


// Delete gallery pics
export const deleteGallery = (id) => async (dispatch) => {
try {
  dispatch({ type: DELETE_BLOG_REQUEST });

  const { data } = await axios.delete(`/api/v1/photo/${id}`);

  dispatch({
    type: DELETE_BLOG_SUCCESS,
    payload: data.success,
  });
} catch (error) {
  dispatch({
    type: DELETE_BLOG_FAIL,
    payload: error.response.data.message,
  });
}
};

export const getBlogDetails = (id) =>async(dispatch)=>{
    try{
        dispatch({type:GET_BLOG_REQUEST});

        const {data} = await axios.get(`/api/v1/blog/${id}`);

        dispatch({
            type:GET_BLOG_SUCCESS,
            payload:data.blog,
        });
    }catch(error){
        dispatch({
            type:GET_BLOG_FAIL,
            payload:error.response.data.message,
        });
    }
   };












