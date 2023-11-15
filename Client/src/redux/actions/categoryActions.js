import axios from 'axios';
import { GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILURE } from "../actionTypes";

export const getAllCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/category');
      dispatch({ type: GET_CATEGORY_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_CATEGORY_FAILURE, payload: error.message });
    }
  };
};