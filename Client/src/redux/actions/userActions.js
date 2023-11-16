import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAILURE, GET_CLIENT_USERS_SUCCESS, GET_ADMIN_USERS_FAILURE, ADD_USER_DATA, SET_USER_DATA } from '../actionTypes';

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/user', userData);
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (error) {
      console.error('el error esta aca', error);
      dispatch({ type: REGISTER_FAILURE, payload: error.message });
    }
  };
};


export const getClientUsers = () => {
  return async (dispatch) => {
      try {
          const response = await axios.get('/user');
          dispatch({ type: GET_CLIENT_USERS_SUCCESS, payload: response.data });
      } catch (error) {
          dispatch({ type: GET_ADMIN_USERS_FAILURE, payload: error.message });
      }
  }
}

export const addUserData = (payload) => ({
  type: ADD_USER_DATA,
  payload: payload
  
})

export const setUserData = (user) => {
	return (dispatch) => {
		dispatch({
			type: SET_USER_DATA,
			payload: user,
		});
	};
};

export const deleteUserFromDb = (userId) => {
  return async (dispatch) => {
    try {
      const response = axios.delete(`user/${userId}`)
      dispatch({ type: 'DELETE_USER_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'DELETE_USER_FAILURE', payload: error.message });
    }

  }
}
