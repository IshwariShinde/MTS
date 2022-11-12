import {combineReducers,createStore, applyMiddleware} from 'redux';

 import thunk from "redux-thunk";
// import {configureStore} from '@reduxjs/toolkit'
 import {composeWithDevTools} from "redux-devtools-extension"
// import { expertiseReducer } from './reducers/ExpertiseReducer';
// import { allUserReducer } from './reducers/userReducer';
// import { getBlogs, createBlog } from './Actions/BlogAction';
import { blogReducer,createBlogReducer } from './Reducers/BlogReducer';
// import { getContacts } from './actions/contactAction';
// import { createFeedback, getFeedbacks } from './actions/feedbackAction';
// import { getPhotoes } from './actions/galleryAction';




const reducer = combineReducers({
    // expertises:expertiseReducer,
    // feedback:createFeedback,
    // users:allUserReducer,
    blogs:blogReducer,
    createblog:createBlogReducer,
    // contacts:getContacts,
    // feedbacks:getFeedbacks,
    // photoes:getPhotoes,
    // createfeedback:createFeedback
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