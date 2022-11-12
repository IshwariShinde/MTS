import{
  ALL_BLOG_REQUEST ,
ALL_BLOG_SUCCESS,
ALL_BLOG_FAIL,
CREATE_BLOG_REQUEST,
CREATE_BLOG_SUCCESS,
CREATE_BLOG_RESET,
CREATE_BLOG_FAIL,
DELETE_BLOG_REQUEST,
DELETE_BLOG_SUCCESS,
DELETE_BLOG_FAIL,
CLEAR_ERRORS 
} from "../constatnts/blogConstants"


export const blogReducer = 
(state = {blogs:[] },action)=>{
  switch(action.type){
      case ALL_BLOG_REQUEST:
          return {
              loading:true,
              blogs:[],
          };
          case ALL_BLOG_SUCCESS:
          return {
              loading:true,
              blogs:action.payload.blogs
              
              
              ,
               blogCount : action.payload.blogCount,
          };
          case ALL_BLOG_FAIL:
          return {
              loading:false,
              error:action.payload,
          };
          case CLEAR_ERRORS:
              return {
                 ...state,
                  error:null,
              };
          default:
              return state;
  }
};


//create blog
export const createBlogReducer = (state = { blog: {} }, action) => {
  switch (action.type){
    case CREATE_BLOG_REQUEST:
     
        return {
        ...state,
        loading:true,
        };

        
          case CREATE_BLOG_SUCCESS:
          return {
         loading:false,
         success:action.payload.success,
         blog:action.payload.blog,
          };

              case CREATE_BLOG_FAIL:
                return{
                  ...state,
                  loading:false,
                  error:action.payload   
      
                };
                case CREATE_BLOG_RESET:
                  return {
                    ...state,
                    success: false,
                  };

              case CLEAR_ERRORS:
               return {
                 ...state,
                 error: null,
                };
                default:
                  return state;
  }
}

//deleteblog
export const deleteBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BLOG_REQUEST:
  
      return {
        ...state,
        loading: true,
      };
    case DELETE_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

  
    case DELETE_BLOG_FAIL:
  
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
   
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


