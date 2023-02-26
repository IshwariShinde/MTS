import {
    ALL_FEEDBACK_REQUEST,
    ALL_FEEDBACK_SUCCESS,
    ALL_FEEDBACK_FAIL,
    CREATE_FEEDBACK_REQUEST,
    CREATE_FEEDBACK_SUCCESS,
    CREATE_FEEDBACK_FAIL,
    DELETE_FEEDBACK_REQUEST,
    DELETE_FEEDBACK_SUCCESS,
    DELETE_FEEDBACK_FAIL,
CLEAR_ERRORS} from '../constatnts/feedbackConstants'


export const feedbackReducer = 
(state = {feedbacks:[] },action)=>{
    switch(action.type){
        case ALL_FEEDBACK_REQUEST:
            return {
                loading:true,
                feedbacks:[],
            };
            case ALL_FEEDBACK_SUCCESS:
            return {
                 loading:false,
                 feedbacks:action.payload.feedbacks,
                 feedbackCount : action.payload.feedbackCount,
            };
            case ALL_FEEDBACK_FAIL:
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

export const createFeedbackReducer = (state = { Feedback: {} }, action) => {
    switch (action.type){
      case CREATE_FEEDBACK_REQUEST:
       
          return {
        loading:true,

       
          };

          
            case CREATE_FEEDBACK_SUCCESS:
            return {
        ...state,
        loading:false,
        Feedback:action.payload,
            }
          
              
                case CREATE_FEEDBACK_FAIL:
                  return{
                    ...state,
                    loading:false,
                    Feedback:null,
                    error:action.payload   
        
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

  export const deleteFeedbackReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_FEEDBACK_REQUEST:
     
        return {
          ...state,
          loading: true,
        };
      case DELETE_FEEDBACK_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
 
      case DELETE_FEEDBACK_FAIL:
      
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