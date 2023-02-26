import axios from "axios";
import { ALL_CONTACT_REQUEST, 
    ALL_CONTACT_SUCCESS, 
    ALL_CONTACT_FAIL,
    CREATE_CONTACT_REQUEST,
    CREATE_CONTACT_SUCCESS,
    CREATE_CONTACT_FAIL,
    CLEAR_ERRORS } from "../constatnts/contactContants";


    export const getContacts =()=> async(dispatch)=>{
        try{
            dispatch({
                type:ALL_CONTACT_REQUEST
            });
            const {data} = await axios.get ("/api/v1/contacts")
        dispatch({
            type:ALL_CONTACT_SUCCESS,
            payload:data,
        })
        }catch(error){
        dispatch({
            type:ALL_CONTACT_FAIL,
            payload:error.response.data.message,
        });
        }
    };
    export const clearErrors = ()=> async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    });
    
    }

    //create contact
export const createContact = (contactData) =>async(dispatch)=>{
    try {
        dispatch({type:CREATE_CONTACT_REQUEST});

        const config ={
            headers : {"Content-Type":"application/json"},
        };
        const {data} = await axios.post(
            `/api/v1/contact/new`,
            contactData,
            config
        );
        dispatch({
            type:CREATE_CONTACT_SUCCESS,
            payload:data,

        });
    }
    catch(error){
        dispatch({
            type:CREATE_CONTACT_FAIL,
            payload:error.response.data.message,
        });
    }
};