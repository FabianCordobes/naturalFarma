import { SEARCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS_FAILURE } from '../actionTypes';
import axios from 'axios';

export const searchProductSuccess = (products) => {
	return {
		type: SEARCH_PRODUCTS_SUCCESS,
		payload: products,
	};
};

export const searchProductFailure = (error) => {
	return {
		type: SEARCH_PRODUCTS_FAILURE,
		payload: error,
	};
};

// action para realizar la busqueda

export const searchProducts = (brand) => {
	const endpoint = `http://localhost:3001/product?brand=${brand}`; 
	return async (dispatch) => {

		try {
			const response = await axios.get(endpoint);
			// const data = await response.json();

			if (response.status === 200) {
				dispatch(searchProductSuccess(response.data));
				console.log('Todo salio joya');
			} else {
				dispatch(searchProductFailure('No se pudieron encontrar resultados'));
			}
         
		} catch (error) {
			dispatch(searchProductFailure('Ocurrió un error en la búsqueda'));
			console.error(error);
		}
	};
};
