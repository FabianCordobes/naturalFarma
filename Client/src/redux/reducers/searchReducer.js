import {
	SEARCH_PRODUCTS_SUCCESS,
	SEARCH_PRODUCTS_FAILURE,
	CLEAR_PRODUCTS,
	ADD_TO_CART,
	REMOVE_ONE_FROM_CART,
	REMOVE_ALL_FROM_CART,
	CLEAR_CART,
	SET_CART,
	ORDER_BY_NAME,
	ORDER_BY_PRICE,
	ORDER_BY_STOCK,
	FILTER_BY_CATEGORY,
	FILTER_BY_PRICE,
	ADD_TO_FAVORITES,
	REMOVE_TO_FAVORITES,
	SET_FAVORITES,
	SHOW_SUCCESS_ALERT,
	HIDE_SUCCESS_ALERT,
	SHOW_ERROR_ALERT,
	HIDE_ERROR_ALERT,
	INCREMENT_CART_COUNT,
	DECREMENT_CART_COUNT,
	PRODUCTS_EDIT_SUCCESS,
	PRODUCTS_EDIT_FAILURE,
} from '../actionTypes';

const initialState = {
	products: [],
	productsAux: [],
	productsPrice: [],
	productsCategory: [],
	error: null,
	cart: [],
	favorites: [],
	showSuccessAlert: false,
	showErrorAlert: false,
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case PRODUCTS_EDIT_SUCCESS:
			return {
				...state,
				error: null,
			};
		case PRODUCTS_EDIT_FAILURE:
			return {
				...state,
				error: action.payload,
			};

		case SHOW_SUCCESS_ALERT:
			return { ...state, showSuccessAlert: true };

		case HIDE_SUCCESS_ALERT:
			return { ...state, showSuccessAlert: false };

		case SHOW_ERROR_ALERT:
			return {
				...state,
				showErrorAlert: true,
			};

		case HIDE_ERROR_ALERT:
			return {
				...state,
				showErrorAlert: false,
			};

		case CLEAR_PRODUCTS:
			return {
				...state,
				products: [],
			};

		case SEARCH_PRODUCTS_SUCCESS:
			return {
				...state,
				products: action.payload,
				productsAux: action.payload,
				error: null,
			};

		case SEARCH_PRODUCTS_FAILURE:
			return {
				...state,
				products: [],
				productsAux: [],
				error: action.payload,
			};

		case ADD_TO_CART: {
			let newItem = state.products.find((product) => product.id === action.payload);
			if (!newItem) {
				return {
					...state,
					cart: state.cart.map((item) =>
						item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
					),
				};
			}
			let itemInCart = state.cart.find((item) => item.id === newItem.id);
			//console.log("state.cart:", state.cart);
			//console.log("Item:", newItem);

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

			localStorage.setItem('cart', JSON.stringify(state.cart));
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

		case SET_CART:
			return {
				...state,
				cart: action.payload, // Actualiza el carrito con los datos proporcionados en payload
			};

		case CLEAR_CART:
			return {
				...state,
				cart: [],
			};
		case ORDER_BY_NAME:
			const sortedProductsByName = [...state.products].sort((a, b) => {
				if (action.payload === 'asc') {
					return a.brand.localeCompare(b.brand); // ASC
				} else {
					return b.brand.localeCompare(a.brand); // DESC
				}
			});
			return {
				...state,
				products: sortedProductsByName,
			};

		case ORDER_BY_PRICE:
			const sortedProductsByPrice = [...state.products].sort((a, b) => {
				if (action.payload === 'min') {
					return a.price - b.price; // Menor a mayor
				} else {
					return b.price - a.price; // Mayor a menor
				}
			});
			return {
				...state,
				products: sortedProductsByPrice,
			};

		case ORDER_BY_STOCK:
			const sortedProductsByStock = [...state.products].sort((a, b) => {
				if (action.payload === 'min') {
					return a.stocks - b.stocks; // Menor a mayor
				} else {
					return b.stocks - a.stocks; // Mayor a menor
				}
			});
			return {
				...state,
				products: sortedProductsByStock,
			};

		case FILTER_BY_PRICE:
			let priceMin = action.payload.priceMin;
			let priceMax = action.payload.priceMax;
			let filteredProductsPrice;
			// Invertir los valores si priceMin es mayor que priceMax

			if (state.productsCategory.length != 0) {
				console.log('probando' + state.productsCategory);

				if (priceMin > priceMax && priceMax != '' && priceMax) {
					const temp = priceMin;
					action.payload.priceMin = priceMax;
					action.payload.priceMax = temp;
				}
				if (action.payload.priceMin === '' && action.payload.priceMax === '') {
					return {
						...state,
						products: state.productsCategory,
						productsPrice: [],
					};
				} else if (
					action.payload.priceMin === '' ||
					action.payload.priceMin.length === 0 ||
					!action.payload.priceMin
				) {
					filteredProductsPrice = state.productsCategory.filter(
						(product) => product.price <= action.payload.priceMax
					);
					return {
						...state,
						products: filteredProductsPrice,
						productsPrice: filteredProductsPrice,
					};
				} else if (
					action.payload.priceMax === '' ||
					action.payload.priceMax.length === 0 ||
					!action.payload.priceMax
				) {
					filteredProductsPrice = state.productsCategory.filter(
						(product) => product.price >= action.payload.priceMin
					);
					return {
						...state,
						products: filteredProductsPrice,
						productsPrice: filteredProductsPrice,
					};
				} else {
					filteredProductsPrice = state.productsCategory.filter(
						(product) =>
							product.price >= action.payload.priceMin &&
							product.price <= action.payload.priceMax
					);
					return {
						...state,
						products: filteredProductsPrice,
						productsPrice: filteredProductsPrice,
					};
				}
			} else {
				if (priceMin > priceMax && priceMax != '' && priceMax) {
					const temp = priceMin;
					action.payload.priceMin = priceMax;
					action.payload.priceMax = temp;
				}
				if (action.payload.priceMin === '' && action.payload.priceMax === '') {
					return {
						...state,
						products: state.productsAux,
						productsPrice: [],
					};
				} else if (
					action.payload.priceMin === '' ||
					action.payload.priceMin.length === 0 ||
					!action.payload.priceMin
				) {
					filteredProductsPrice = state.productsAux.filter(
						(product) => product.price <= action.payload.priceMax
					);
					return {
						...state,
						products: filteredProductsPrice,
						productsPrice: filteredProductsPrice,
					};
				} else if (
					action.payload.priceMax === '' ||
					action.payload.priceMax.length === 0 ||
					!action.payload.priceMax
				) {
					filteredProductsPrice = state.productsAux.filter(
						(product) => product.price >= action.payload.priceMin
					);
					return {
						...state,
						products: filteredProductsPrice,
						productsPrice: filteredProductsPrice,
					};
				} else {
					filteredProductsPrice = state.productsAux.filter(
						(product) =>
							product.price >= action.payload.priceMin &&
							product.price <= action.payload.priceMax
					);
					return {
						...state,
						products: filteredProductsPrice,
						productsPrice: filteredProductsPrice,
					};
				}
			}

		case FILTER_BY_CATEGORY:
			if (state.productsPrice.length != 0) {
				const filteredProducts = state.productsPrice.filter((product) =>
					product.Categories.some((category) => category.description === action.payload)
				);
				console.log('que pedo wey:' + JSON.stringify(filteredProducts));
				if (action.payload != 'all' && filteredProducts) {
					return {
						...state,
						products: filteredProducts,
					};
				} else if (action.payload === 'all') {
					return {
						...state,
						products: state.productsPrice,
					};
				}
			} else {
				console.log(action.payload);
				const filteredProducts = state.productsAux.filter((product) =>
					product.Categories.some((category) => category.description === action.payload)
				);
				console.log('que pedo wey:' + JSON.stringify(filteredProducts));
				if (action.payload != 'all' && filteredProducts) {
					return {
						...state,
						products: filteredProducts,
						productsCategory: filteredProducts,
					};
				} else if (action.payload === 'all') {
					return {
						...state,
						products: state.productsAux,
						productsCategory: [],
					};
				}
			}

		case ADD_TO_FAVORITES:
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};

		case REMOVE_TO_FAVORITES:
			return {
				...state,
				favorites: state.favorites.filter((product) => product.id !== action.payload),
			};

		case SET_FAVORITES:
			return {
				...state,
				favorites: action.payload, // Actualiza el carrito con los datos proporcionados en payload
			};

		default:
			return state;
	}
};

export default searchReducer;
