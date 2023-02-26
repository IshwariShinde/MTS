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
import axios from 'axios';

export const getFeedbacks =()=> async (dispatch)=>{
    try{
        dispatch({
            type:ALL_FEEDBACK_REQUEST
        });
        const {data} = await axios.get ("/api/v1/feedbacks")
    dispatch({
        type:ALL_FEEDBACK_SUCCESS,
        payload:data,
    })
    }catch(error){
    dispatch({
        type:ALL_FEEDBACK_FAIL,
        payload:error.response.data.message,
    });
    }
};



//create feedback
export const createFeedback = (feedbackData) =>async (dispatch)=>{
    try {
        dispatch({type:CREATE_FEEDBACK_REQUEST});

        const config ={
            headers : {"Content-Type":"multipart/form-data"}
        };
        const {data} = await axios.post(
            `/api/v1/feedback`,
            feedbackData,
            config
        );
        dispatch({
            type:CREATE_FEEDBACK_SUCCESS,
            payload:data.feedback,

        });
    }
    catch(error){
        dispatch({
            type:CREATE_FEEDBACK_FAIL,
            payload:error.response.data.message,
        });
    }
};

  // Delete feedback pics
  export const deleteFeedback = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_FEEDBACK_REQUEST });
  
      const { data } = await axios.delete(`/api/v1/feedback/${id}`);
  
      dispatch({
        type: DELETE_FEEDBACK_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_FEEDBACK_FAIL,
        payload: error.response.data.message,
      });
    }
  };


export const clearErrors = ()=> async(dispatch)=>{
dispatch({
    type:CLEAR_ERRORS
});

}