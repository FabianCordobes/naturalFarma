const initialState = {
    admin: null,
    error: null
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
            }
        default:
            return state;
    }
};

export default adminReducer