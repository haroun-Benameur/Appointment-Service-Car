import { type } from "@testing-library/user-event/dist/type";
import {
    SERVICE_LIST_FAIL,
    SERVICE_LIST_REQUEST,
    SERVICE_LIST_SUCCESS

} from "../constants/serviceConstants";
import axios from "axios";

export const listServices=()=> async(dipsatch)=> {

    try{
        dipsatch({type:SERVICE_LIST_REQUEST});
        const {data}=await axios.get('http://127.0.0.1:8000/api/service')
        console.log(data);
        
        dipsatch({
            type:SERVICE_LIST_SUCCESS,
            payload:data
        })
    }

    catch(error) {
        dipsatch({
            type:SERVICE_LIST_FAIL,
            payload: error.response && error.response.data.detail //message
            ? error.response.data.detail
            : error.message
        })
    }
}