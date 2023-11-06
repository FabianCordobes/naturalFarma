import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAILURE } from '../actionTypes';

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
