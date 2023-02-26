import React, { useEffect } from 'react'
import Adminsidebar from './Adminsidebar';
import { getFeedbacks,clearErrors } from '../../Actions/FeedbackAction';
// import { getFeedbacks } from '../../actions/feedbackAction';
import { useDispatch, useSelector } from 'react-redux';
import '../../CSS/adminfeedback.css'



const AdminFeedback = ({feedback}) => {

    const dispatch = useDispatch();
    const { error, feedbacks } = useSelector((state) => state.feedbacks);
 
    useEffect(() => {
      dispatch(getFeedbacks());
    }, [dispatch]);
    
   
   
  return (
    <div className='admincontact'>
    
        <Adminsidebar />
        <div className='admincontact_content'>
        <h1>Feedback List</h1>
        <table >
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Mobile No</th>
                {/* <th>DOB</th> */}
                <th>Email id</th>
                <th>Suggestion</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks &&
                feedbacks.map((feedback) => (
                  <tr>
                    <td>{feedback.fullName}</td>
                    <td>{feedback.mobileNo}</td>
                    <td>{feedback.myEmail}</td>
                    <td>{feedback.suggestions}</td>
                  
                    
                  </tr>
                ))}
            </tbody>
          </table>

        </div></div>
 
  )
}

export default AdminFeedback