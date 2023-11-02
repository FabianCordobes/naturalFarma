import {
	SEARCH_PRODUCTS_SUCCESS,
	SEARCH_PRODUCTS_FAILURE,
	CLEAR_PRODUCTS,
	ADD_TO_CART,
	REMOVE_ONE_FROM_CART,
	REMOVE_ALL_FROM_CART,
	CLEAR_CART,
	SET_CART,
	ORDER_BY_NAME, ORDER_BY_PRICE, ORDER_BY_STOCK, FILTER_BY_CATEGORY
} from '../actionTypes';

const initialState = {
	products: [],
	productsAux: [],
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
			if(!newItem){
				return {
					...state,
					cart: state.cart.map((item) => 
					item.id === action.payload ? {...item, quantity: item.quantity + 1 } :
					item)
				}
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
				cart: []
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

		case FILTER_BY_CATEGORY:
			console.log(action.payload)
			const filteredProducts = state.productsAux.filter(product => product.category === action.payload)
			console.log("que pedo wey:" + JSON.stringify(filteredProducts))
			if (action.payload != "all" && filteredProducts) {
				return {
					...state,
					products: filteredProducts
				}
			}
			else if (action.payload === "all") {
				return {
					...state,
					products: state.productsAux
				}
			}
		default:
			return state;
	}
};

export default searchReducer;