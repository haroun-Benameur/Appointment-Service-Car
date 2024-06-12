import { type } from "@testing-library/user-event/dist/type";
import {
    CAR_LIST_FAIL,
    CAR_LIST_REQUEST,
    CAR_LIST_SUCCESS,

    ADD_CAR_REQEUST,
    ADD_CAR_SUCCESS,
    ADD_CAR_FAIL

} from "../constants/carConstants";
import axios from "axios";

export const listCars=(id)=> async(dipsatch)=> {

    try{
        dipsatch({type:CAR_LIST_REQUEST});
        const {data}=await axios.get(`http://127.0.0.1:8000/api/cars/owner/${id}`)
        console.log(id)
        
        dipsatch({
            type:CAR_LIST_SUCCESS,
            payload:data
        })
    }

    catch(error) {
        dipsatch({
            type:CAR_LIST_FAIL,
            payload: error.response && error.response.data.detail //message
            ? error.response.data.detail
            : error.message
        })
    }
}


export const addCar=(
    model,chassis,matricule,fuel,mileage
     )=> async(dispatch,getstate)=> {
        try {
            dispatch({
                type:ADD_CAR_REQEUST
            })

            const {userLogin: {userInfo}} = getstate();
       
        
            const config = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${userInfo.token}`
                }
              };

           

            const data = await axios.post('http://127.0.0.1:8000/api/cars/addcar',
            {  model,chassis,matricule,fuel,mileage},config)

            
                dispatch({
                    type:ADD_CAR_SUCCESS,
                    payload:data.data
                })

               

        }

        catch(error) {
            dispatch({
                type:ADD_CAR_FAIL ,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message
            });
        }
    }    
