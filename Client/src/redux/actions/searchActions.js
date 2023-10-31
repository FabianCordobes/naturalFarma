import {
	SEARCH_PRODUCTS_SUCCESS,
	SEARCH_PRODUCTS_FAILURE,
	DELETE_PRODUCT,
	ORDER_BY_NAME,
	ORDER_BY_PRICE,
	ORDER_BY_STOCK,
	PRODUCTS_EDIT_SUCCESS,
	PRODUCTS_EDIT_FAILURE,
	CLEAR_PRODUCTS,
} from '../actionTypes';
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
			} else {
				dispatch(searchProductFailure('No se pudieron encontrar resultados'));
			}
		} catch (error) {
			dispatch(searchProductFailure('Ocurrió un error en la búsqueda'));
			console.error(error);
		}
	};
};

export const deleteProduct = (payload) => {
	return async function (dispatch) {
		try {
			const response = await axios.delete(`http://localHost:3001/product/${payload}`);
			console.log(response);
			dispatch({
				type: DELETE_PRODUCT,
				payload,
			});
			alert('El producto se eliminó correctamente');
		} catch (error) {
			console.log(error);
			alert('El producto no se pudo eliminar');
		}
	};
};

export const editProductSuccess = (product) => ({
	type: PRODUCTS_EDIT_SUCCESS,
	payload: product,
});

export const editProductFailure = (error) => ({
	type: PRODUCTS_EDIT_FAILURE,
	payload: error,
});

export const editProduct = (productId, updatedProductData) => {
	return async (dispatch) => {
		try {
			const response = await axios.put(
				`http://localhost:3001/products/${productId}`,
				updatedProductData
			);

			if (response.status === 200) {
				const updatedProduct = response.data;
				dispatch(editProductSuccess(updatedProduct));
			} else {
				dispatch(editProductFailure('No se pudo editar el producto'));
			}
		} catch (error) {
			dispatch(editProductFailure('Ocurrió un error al editar el producto'));
		}
	};
};

//ORDENAMIENTO POR NOMBRE ALFABETICO
export const orderByName = (order) => {
	return {
		type: ORDER_BY_NAME,
		payload: order,
	};
};

//ORDENAMIENTO POR PRECIO DE MAYOR A MENOS Y VISCEVERSA
export const orderByPrice = (price) => {
	return {
		type: ORDER_BY_PRICE,
		payload: price,
	};
};
export const clearProducts = () => {
	return {
		type: CLEAR_PRODUCTS,
	};
};

//ORDENAMIENTO POR STOCK SEGUN MENOR A MAYOY VISCEVERSA
export const orderByStock = (stock) => {
	return {
		type: ORDER_BY_STOCK,
		payload: stock,
	};
};
