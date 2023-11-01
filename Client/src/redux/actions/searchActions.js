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
	ADD_TO_CART,
	REMOVE_ALL_FROM_CART,
	REMOVE_ONE_FROM_CART,
	CLEAR_CART,
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
export const orderByName = (payload) => {
	return {
		type: ORDER_BY_NAME,
		payload,
	};
};

//ORDENAMIENTO POR PRECIO DE MAYOR A MENOS Y VISCEVERSA
export const orderByPrice = (payload) => {
	return {
		type: ORDER_BY_PRICE,
		payload,
	};
};

export const clearProducts = () => {
	return {
		type: CLEAR_PRODUCTS,
	};
};

//ORDENAMIENTO POR STOCK SEGUN MENOR A MAYOY VISCEVERSA
export const orderByStock = (payload) => {
	return {
		type: ORDER_BY_STOCK,
		payload,
	};
};



// CARRITO
export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });

export const delFromCart = (id, all = false) =>
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };

export const clearCart = () => ({ type: CLEAR_CART });
