import axios from 'axios'
import { ADD_ADMIN_USER_SUCCESS, ADD_ADMIN_USER_FAILURE, GET_ADMIN_USERS_FAILURE, GET_ADMIN_USERS_SUCCESS } from '../actionTypes'

export const addAdminUser = (adminUserData) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/admin', adminUserData);
            dispatch({ type: ADD_ADMIN_USER_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: ADD_ADMIN_USER_FAILURE, payload: error.message });
        }
    }
}

export const getAdminUsers = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/admin');
            dispatch({ type: GET_ADMIN_USERS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: GET_ADMIN_USERS_FAILURE, payload: error.message });
        }
    }
}