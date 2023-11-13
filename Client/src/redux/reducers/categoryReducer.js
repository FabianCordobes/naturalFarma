const initialState = {
    categories: [],
    error: null,
  };
  
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_CATEGORY_SUCCESS':
        return {
          ...state,
          categories: action.payload,
          error: null,
        };
      case 'GET_CATEGORY_FAILURE':
        return {
          ...state,
          categories: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default categoryReducer;