import {
    SERVICE_LIST_FAIL,
    SERVICE_LIST_REQUEST,
    SERVICE_LIST_SUCCESS

} from "../constants/serviceConstants";

export const serviceReducer=( state={loading:false,services:[],error:null}, action )=>{
   switch(action.type) {
       case SERVICE_LIST_REQUEST:
           return {...state, loading: true, services: [] };
       case SERVICE_LIST_SUCCESS:
           return {...state,loading:false,services:action.payload,error:null}  ;
       
       case SERVICE_LIST_FAIL:
           return {...state,loading:false,services:[], error: action.payload }
  
       default:
           return state;
       }

};