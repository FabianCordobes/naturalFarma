const initialState = {
    admin: null,
    error: null,
    adminUsers: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ADMIN_USER_SUCCESS':
            return {
                ...state,
                admin: action.payload,
                error: null,
            };
        case 'ADD_ADMIN_USER_FAILURE':
            return {
                ...state,
                user: null,
                error: action.payload,
            };
        case 'GET_ADMIN_USERS_SUCCESS':
            return {
                ...state,
                adminUsers: action.payload,
                error: null,
            }
        case 'GET_ADMIN_USERS_FAILURE':
            return {
                ...state,
                adminUsers: [],
                error: action.payload
            }
        default:
            return state;
    }
};

export default adminReducer