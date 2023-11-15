import {
	DECREMENT_ALL,
	DECREMENT_CART_COUNT,
	INCREMENT_CART_COUNT,
	SET_CART_COUNT,
} from '../actionTypes';

const initialState = 0; // Inicializas el contador a cero.

const countReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT_CART_COUNT:
			return state + 1;
		case DECREMENT_CART_COUNT:
			return state - 1;
		case DECREMENT_ALL:
			return {
				state: 0,
			};
		case SET_CART_COUNT:
			return {
				state: action.payload,
			};
		default:
			return state;
	}
};

export default countReducer;
