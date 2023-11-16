import { ADD_USER_DATA, SET_USER_DATA } from '../actionTypes';

const initialState = {
	user: null,
	error: null,
	clientUsers: [],
	deleteUsers: [],
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER_DATA:
			return {
				...state,
				user: action.payload,
			};

		case SET_USER_DATA:
			return {
				...state,
				user: action.payload, 
			};

		case 'REGISTER_SUCCESS':
			return {
				...state,
				user: action.payload,
				error: null,
			};
		case 'REGISTER_FAILURE':
			return {
				...state,
				user: null,
				error: action.payload,
			};
		case 'GET_CLIENT_USERS_SUCCESS':
			return {
				...state,
				clientUsers: action.payload,
				error: null,
			};

		case 'GET_DELETE_USERS_SUCCESS':
			return {
				...state,
				deleteUsers: action.payload,
				error: null,
			};

		case 'GET_CLIENT_USERS_FAILURE':
			return {
				...state,
				clientUsers: [],
				error: action.payload,
			};

		case 'GET_DELETE_USERS_FAILURE':
			return {
				...state,
				deleteUsers: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
