import {combineReducers,createStore, applyMiddleware} from 'redux';

 import thunk from "redux-thunk";
// import {configureStore} from '@reduxjs/toolkit'
 import {composeWithDevTools} from "redux-devtools-extension"
// import { expertiseReducer } from './reducers/ExpertiseReducer';
// import { allUserReducer } from './reducers/userReducer';
// import { getBlogs, createBlog } from './Actions/BlogAction';
import { blogReducer,createBlogReducer } from './Reducers/BlogReducer';
// import { getContacts } from './actions/contactAction';
import { createFeedbackReducer,feedbackReducer } from './Reducers/FeedbackReducer';
import { contactReducer,createContactReducer } from './Reducers/ContactReducer';
// import { createFeedback, getFeedbacks } from './actions/feedbackAction';
// import { getPhotoes } from './actions/galleryAction';




const reducer = combineReducers({
    // expertises:expertiseReducer,
    // users:allUserReducer,
    blogs:blogReducer,
    createblog:createBlogReducer,
    contact:createContactReducer,
    contacts:contactReducer,
    feedbacks:feedbackReducer,
    // photoes:getPhotoes,
    feedback:createFeedbackReducer,
});
 let initialState ={};

 const middleware = [thunk];

 const store = createStore(
   reducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
 );
// const store  = configureStore({
//     reducer,
//     // composeWithDevTools(applyMiddleware{...middleware}),
//     // initialState
   

// });

export default store;