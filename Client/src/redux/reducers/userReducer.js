const initialState = {
    user: null, 
    error: null,
    clientUsers: [], 
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
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
      case 'GET_CLIENT_USERS_FAILURE':
        return {
            ...state,
            clientUsers: [],
            error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  