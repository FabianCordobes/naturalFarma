import { SEARCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS_FAILURE } from '../actionTypes';
import axios from 'axios';

export const searchProductSuccess = (results) => {
	return {
		type: SEARCH_PRODUCTS_SUCCESS,
		payload: results,
	};
};

export const searchProductFailure = (error) => {
	return {
		type: SEARCH_PRODUCTS_FAILURE,
		payload: error,
	};
};

// action para realizar la busqueda

export const searchProducts = (query) => {
	const endpoint = `/products?query=${query}`; 
	return async (dispatch) => {

		try {
			const response = await axios.get(endpoint);
			const data = await response.json();

			if (response.status === 200) {
				dispatch(searchProductSuccess(data));
			} else {
				dispatch(searchProductFailure('No se pudieron encontrar resultados'));
			}
         
		} catch (error) {
			dispatch(searchProductFailure('Ocurrió un error en la búsqueda'));
		}
	};
};
