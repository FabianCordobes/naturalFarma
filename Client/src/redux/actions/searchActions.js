import {
	SEARCH_PRODUCTS_SUCCESS,
	SEARCH_PRODUCTS_FAILURE,
	DELETE_PRODUCT,
	ORDER_BY_NAME,
	ORDER_BY_PRICE,
	ORDER_BY_STOCK,
	FILTER_BY_CATEGORY,
	FILTER_BY_PRICE,
	PRODUCTS_EDIT_SUCCESS,
	PRODUCTS_EDIT_FAILURE,
	CLEAR_PRODUCTS,
	ADD_TO_CART,
	REMOVE_ALL_FROM_CART,
	REMOVE_ONE_FROM_CART,
	CLEAR_CART,
	ADD_TO_FAVORITES,
	REMOVE_TO_FAVORITES,
	SET_FAVORITES,
	HIDE_SUCCESS_ALERT,
	SHOW_SUCCESS_ALERT,
	SHOW_ERROR_ALERT,
	HIDE_ERROR_ALERT,
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
	const endpoint = `/product?brand=${brand}`;
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
			const response = await axios.delete(`/product/${payload}`);
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

export const editProduct = (productId, editedData) => {
	return async (dispatch) => {
		try {
			console.log('Sending edit request for product ID:', productId);
			const response = await axios.put(`/product/${productId}`, editedData);

			console.log('Server response:', response);

			if (response.status === 200) {
				const updatedProduct = response.data;
				console.log('Updated product:', updatedProduct);
				dispatch(editProductSuccess(updatedProduct));
			} else {
				dispatch(editProductFailure('No se pudo editar el producto'));
			}
		} catch (error) {
			console.error('Error editing product:', error);
			dispatch(editProductFailure('Ocurrió un error al editar el producto'));
		}
	};
};

//ORDENAMIENTO POR NOMBRE ALFABETICO
export const orderByName = (brand) => {
	return {
		type: ORDER_BY_NAME,
		payload: brand,
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

export const filterByCategory = (category) => {
	return {
		type: FILTER_BY_CATEGORY,
		payload: category,
	};
};

export const filterByPrice = (priceMin, priceMax) => {
	return {
		type: FILTER_BY_PRICE,
		payload: { priceMin, priceMax },
	};
};

// CARRITO
//export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });
export const addToCart = (id) => {
	return (dispatch, getState) => {
		const state = getState();
		const newItem = state.search.products.find((product) => product.id === id);
		const itemInCart = state.search.cart.find((item) => item.id === newItem.id);

		if (itemInCart) {
			itemInCart.quantity += 1;
		} else {
			state.search.cart.push({ ...newItem, quantity: 1 });
		}

		dispatch({
			type: ADD_TO_CART,
			payload: state.search.cart,
		});

		// Guarda el carrito actualizado en el localStorage
		localStorage.setItem('cart', JSON.stringify(state.search.cart));
	};
};

export const delFromCart = (id, all = false) =>
	all
		? { type: REMOVE_ALL_FROM_CART, payload: id }
		: { type: REMOVE_ONE_FROM_CART, payload: id };

export const clearCart = () => ({ type: CLEAR_CART });

export const setCart = (id) => {
	return {
		type: 'SET_CART',
		payload: id,
	};
};

export const addToFavorites = (id) => {
	return (dispatch, getState) => {
		const state = getState(); // Corregido: declara la variable 'state'
		const newItem = state.search.products.find((product) => product.id === id);
		dispatch({
			type: ADD_TO_FAVORITES,
			payload: newItem,
		});
		// Guardar la lista de favoritos en el localStorage
		localStorage.setItem('favorites', JSON.stringify(state.search.favorites));
	};
};

export const removeToFavorites = (id) => {
	return (dispatch) => {
		dispatch({
			type: REMOVE_TO_FAVORITES,
			payload: id,
		});
	};
};

export const setFavorites = (favorites) => {
	return (dispatch) => {
		dispatch({
			type: SET_FAVORITES,
			payload: favorites,
		});
	};
};

// ALERTAS

// alertActions.js
export const showSuccessAlert = () => {
	return { type: SHOW_SUCCESS_ALERT };
};

export const hideSuccessAlert = () => {
	return { type: HIDE_SUCCESS_ALERT };
};

export const showErrorAlert = () => ({
	type: SHOW_ERROR_ALERT,
});

export const hideErrorAlert = () => ({
	type: HIDE_ERROR_ALERT,
});
