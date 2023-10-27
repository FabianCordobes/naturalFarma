import { ADD_TO_CART } from '../actionTypes';

const initialState = {
	items: [], // Array de objetos { product, quantity }
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const { product, quantity } = action.payload;
			// console.log(product.quantity);
			const existingCartItem = state.items.find((item) => item.product.id === product.id);

			if (existingCartItem) {
				// El producto ya existe en el carrito, actualiza la cantidad
				existingCartItem.quantity += quantity;
			} else {
				// Agrega un nuevo elemento al carrito
				state.items.push({ product, quantity });
			}

			return {
				...state,
			};
		default:
			return state;
	}
};

export default cartReducer;
