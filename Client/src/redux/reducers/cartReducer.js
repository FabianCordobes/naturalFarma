import { ADD_TO_CART } from '../actionTypes';

const initialState = {
	items: [], // Array de objetos { product, quantity }
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const { product, quantity } = action.payload;

			const existingCartItemIndex = state.items.findIndex(
				(item) => item.product.id === product.id
			);

			if (existingCartItemIndex !== -1) {
				// El producto ya existe en el carrito, actualiza la cantidad
				const updatedCartItems = [...state.items];
				updatedCartItems[existingCartItemIndex].quantity += quantity;

				return {
					...state,
					items: updatedCartItems,
				};
			} else {
				// Agrega un nuevo elemento al carrito
				return {
					...state,
					items: [...state.items, { product, quantity }],
				};
			}
		default:
			return state;
	}
};

export default cartReducer;
