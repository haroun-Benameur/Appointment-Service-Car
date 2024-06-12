import {applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { addCarReducer, carReducer } from './reducers/carReducer';
import { serviceReducer } from './reducers/serviceReducer';
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './reducers/UserReducers';

const reducer=combineReducers({
    car:carReducer,
    service:serviceReducer,
    userRegister:userRegisterReducer,
    userLogin:userLoginReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    addCar:addCarReducer
})

const UserInfoFromStorage=localStorage.getItem('userInfo') ?
JSON.parse(localStorage.getItem("userInfo")) : null;




const initialState = {

  userLogin: { 
    userInfo: UserInfoFromStorage
  }
};
const middleware = [thunk];

const store = createStore(
  reducer, // Use the combined reducer
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
