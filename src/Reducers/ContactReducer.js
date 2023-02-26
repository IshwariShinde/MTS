import { ALL_CONTACT_REQUEST, 
    ALL_CONTACT_SUCCESS, 
    ALL_CONTACT_FAIL,
    CREATE_CONTACT_REQUEST,
    CREATE_CONTACT_SUCCESS,
    CREATE_CONTACT_FAIL,
    CLEAR_ERRORS } from "../constatnts/contactContants";


    
export const contactReducer = 
(state = {contacts:[] },action)=>{
    switch(action.type){
        case ALL_CONTACT_REQUEST:
            return {
                loading:true,
                contacts:[],
            };
            case ALL_CONTACT_SUCCESS:
            return {
                loading:false,
                contacts:action.payload.contacts,
                 contactsCount : action.payload.contactsCount,
            };
            case ALL_CONTACT_FAIL:
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


//create contact
export const createContactReducer = (state = { contact: {} }, action) => {
    switch (action.type){
      case CREATE_CONTACT_REQUEST:
       
          return {
          ...state,
          loading:true,
          };

          
            case CREATE_CONTACT_SUCCESS:
            return {
           loading:false,
           success:action.payload.success,
           contact:action.payload.contact,
            };

          
              
                case CREATE_CONTACT_FAIL:
                  return{
                    ...state,
                    loading:false,
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