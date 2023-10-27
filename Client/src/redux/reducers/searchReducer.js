import {
	SEARCH_PRODUCTS_SUCCESS,
	SEARCH_PRODUCTS_FAILURE,
	DELETE_PRODUCT,
	PRODUCTS_EDIT_SUCCESS,
	PRODUCTS_EDIT_FAILURE,
} from '../actionTypes';

const initialState = {
	products: [],
	error: null,
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_PRODUCTS_SUCCESS:
			return {
				...state,
				products: action.payload,
				error: null,
			};
		case SEARCH_PRODUCTS_FAILURE:
			return {
				...state,
				products: [],
				error: action.payload,
			};
		case DELETE_PRODUCT:
			// Acción para eliminar un perro
			return {
				...state,
				products: state.products.filter((product) => product.id !== action.payload), // Filtra la lista de perros, excluyendo el perro eliminado
			};
		case PRODUCTS_EDIT_SUCCESS:
			// Encuentra el producto editado en la lista de productos y actualízalo
			const updatedProduct = action.payload;

			const updatedProducts = state.products.map((product) =>
				product.id === updatedProduct.id ? updatedProduct : product
			);

			return {
				...state,
				products: updatedProducts,
				error: null,
			};
		case PRODUCTS_EDIT_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default searchReducer;
