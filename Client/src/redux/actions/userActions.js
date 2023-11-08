import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAILURE, GET_CLIENT_USERS_SUCCESS, GET_ADMIN_USERS_FAILURE } from '../actionTypes';

export const registerUser = (userData) => {
  return async (dispatch) => {
      try {
          const response = await axios.post('http://localhost:3001/user', userData);
          dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      } catch (error) {
          dispatch({ type: REGISTER_FAILURE, payload: error.message });
      }
  };
};


export const getClientUsers = () => {
  return async (dispatch) => {
      try {
          const response = await axios.get('http://localhost:3001/user');
          dispatch({ type: GET_CLIENT_USERS_SUCCESS, payload: response.data });
      } catch (error) {
          dispatch({ type: GET_ADMIN_USERS_FAILURE, payload: error.message });
      }
  }
}
