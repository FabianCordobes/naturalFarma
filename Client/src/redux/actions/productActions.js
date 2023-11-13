import axios from 'axios';
import { GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_FAILURE } from "../actionTypes";

export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/product');
            dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: GET_ALL_PRODUCTS_FAILURE, payload: error.message });
        }
    };
};