import { type } from '@testing-library/user-event/dist/type';
import {USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_RESET, USER_DETAILS_SUCCESS, USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT ,

    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATED_PROFILE_FAIL,
    USER_UPDATED_PROFILE_REQUEST,
    USER_UPDATED_PROFILE_SUCCESS,

 
} 
    from '../constants/UserConstants'

    import axios from 'axios';
    
export const register=(
    email,userName ,firstName, password,
    lastName, about,address,
    contactNumber, city, state,
     )=> async(dispatch)=> {
        try {
            dispatch({
                type:USER_REGISTER_REQUEST
            })

            const config={
                headers:{'Content-Type':'application/json'}
            }

            const data = await axios.post('http://127.0.0.1:8000/api/register',
            { email,userName,firstName,lastName,about,address,contactNumber,
                city,state,password},config)

            
                dispatch({
                    type:USER_REGISTER_SUCCESS,
                    payload:data.data
                })

                localStorage.setItem('userInfo',JSON.stringify(data.data))

        }

        catch(error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detai
                    : error.message
            });
        }
    }    


export const login=(email,password)=>async (dispatch)=> {

    try {

        dispatch(
            {type:USER_LOGIN_REQUEST}
        )

        const config={
            headers:{'Content-Type':'application/json'}
        }

        const {data}= await axios.post('http://127.0.0.1:8000/api/login',{
            email:email,
            password:password
        },config)

    
        dispatch(
            {type:USER_LOGIN_SUCCESS,
            payload:data
            }
        )

        localStorage.setItem('userInfo',JSON.stringify(data))


    }

   
    catch(error) {
        dispatch(
            {type:USER_LOGIN_FAIL,
                payload: error.response && error.response.data.detail
                ? error.response.data.detai
                : error.message
            }
        )
    }

}

export const logout=()=>(dispatch) => {

    dispatch( {
        type:USER_LOGOUT  ,
        
    })

    dispatch( {
        type:USER_DETAILS_RESET
    })

    localStorage.removeItem('userInfo')

   


} 

export const getUserDetails=()=>async(dispatch,getstate)=> {

    try {
        dispatch(
            {type:USER_DETAILS_REQUEST}
        )

        const {userLogin: {userInfo}} = getstate()
       
        
        const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`
            }
          };

        const {data} = await axios.get('http://127.0.0.1:8000/api/profile',
         config);


         dispatch(
            {type:USER_DETAILS_SUCCESS,
            payload:data
            }
         )

         console.log(data)
    }

    catch(error) {

        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detai
                : error.message
        });

    }
}

    
export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_UPDATED_PROFILE_REQUEST,
      });
  
      const { userLogin: { userInfo } } = getState();
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.put(
        'http://127.0.0.1:8000/api/profile/update',
        user,
        config
      );
  
      dispatch({
        type: USER_UPDATED_PROFILE_SUCCESS,
        payload: data,
      });
  
      localStorage.setItem('userInfo', JSON.stringify(data));
      console.log("Updated successfully8");
    } catch (error) {
      dispatch({
        type: USER_UPDATED_PROFILE_FAIL,
        payload: error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
      });
      console.error("Error updating profile:", error);
    }
  };