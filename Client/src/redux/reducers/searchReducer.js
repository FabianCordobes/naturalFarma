import {
	SEARCH_PRODUCTS_SUCCESS,
	SEARCH_PRODUCTS_FAILURE,
	CLEAR_PRODUCTS,
	ADD_TO_CART,
	REMOVE_ONE_FROM_CART,
	REMOVE_ALL_FROM_CART,
	CLEAR_CART,
} from '../actionTypes';

const initialState = {
	products: [],
	error: null,
	cart: [],
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case CLEAR_PRODUCTS:
			return {
				...state,
				products: [],
			};
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

		case ADD_TO_CART: {
			let newItem = state.products.find((product) => product.id === action.payload);

			let itemInCart = state.cart.find((item) => item.id === newItem.id);

			return itemInCart
				? {
						...state,
						cart: state.cart.map((item) =>
							item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
						),
				  }
              
				: {
						...state,
						cart: [...state.cart, { ...newItem, quantity: 1 }],
				  };
		}

		case REMOVE_ONE_FROM_CART: {
			let itemToDelete = state.cart.find((item) => item.id === action.payload);

			return itemToDelete.quantity > 1
				? {
						...state,
						cart: state.cart.map((item) =>
							item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
						),
				  }
				: {
						...state,
						cart: state.cart.filter((item) => item.id !== action.payload),
				  };
		}

		case REMOVE_ALL_FROM_CART: {
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
			};
		}

		case CLEAR_CART:
			return {
            ...state,
            cart: []
         };
		default:
			return state;
	}
};

export default searchReducer;
