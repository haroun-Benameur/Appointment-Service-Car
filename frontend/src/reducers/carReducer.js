import {
    ADD_CAR_FAIL,
    ADD_CAR_REQEUST,
     ADD_CAR_SUCCESS,
     CAR_LIST_FAIL,
     CAR_LIST_REQUEST,
     CAR_LIST_SUCCESS

} from "../constants/carConstants";

 export const carReducer=( state={loading:false,cars:[],error:null}, action )=>{
    switch(action.type) {
        case CAR_LIST_REQUEST:
            return {...state, loading: true, cars: [] };
        case CAR_LIST_SUCCESS:
            return {...state,loading:false,cars:action.payload,error:null}  ;
        
        case CAR_LIST_FAIL:
            return {...state,loading:false,cars:[], error: action.payload }
   
        default:
            return state;
        }

 };

 export const addCarReducer=( state={},action )=> {

    switch(action.type) {
        case  ADD_CAR_REQEUST:
            return {...state,loading:true};
        
        case ADD_CAR_SUCCESS:
            return{...state,carAddInfo:action.payload,error:null}  
            
        case ADD_CAR_FAIL:
            return {...state,loading:false, error:action.payload}

              
        
        default : 
        return state;        

}
}    
