<<<<<<< HEAD
import { SEARCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS_FAILURE } from '../actionTypes';
=======
import {
	SEARCH_PRODUCTS_SUCCESS,
	SEARCH_PRODUCTS_FAILURE,
	DELETE_PRODUCT,
	PRODUCTS_EDIT_SUCCESS,
	PRODUCTS_EDIT_FAILURE,
	ORDER_BY_NAME,
	ORDER_BY_PRICE,
	ORDER_BY_STOCK,
} from '../actionTypes';
>>>>>>> e995e6098514d8ad8b62dea7cfaa452e6b03dbb2

const initialState = {
   products: [],
   error: null,
}

const searchReducer = (state = initialState, action) => {
<<<<<<< HEAD
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
            error: action.payload
         };
      default:
         return state;
   }
=======
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

		case ORDER_BY_NAME:
			let sortAll =
				action.payload === 'asc'
					? [...state.products].sort((a, b) => a.brand.localeCompare(b.brand))
					: [...state.products].sort((a, b) => b.brand.localeCompare(a.brand));
			return {
				...state,
				products: sortAll,
			};

		case ORDER_BY_PRICE:
			let sortedPrice = [...state.products];

			if (action.payload === 'min') {
				sortedPrice.sort((a, b) => a.price - b.price);
			}
			if (action.payload === 'max') {
				sortedPrice.sort((a, b) => b.price - a.price);
			}
			return {
				...state,
				products: sortedPrice,
			};

		case ORDER_BY_STOCK:
			let sortedStock = [...state.products];

			if (action.payload === 'min') {
				sortedStock.sort((a, b) => a.stocks - b.stocks);
			}
			if (action.payload === 'max') {
				sortedStock.sort((a, b) => b.stocks - a.stocks);
			}
			return {
				...state,
				products: sortedStock,
			};

		default:
			return state;
	}
>>>>>>> e995e6098514d8ad8b62dea7cfaa452e6b03dbb2
};

export default searchReducer
