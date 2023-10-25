import { SEARCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS_FAILURE } from '../actionTypes';

const initialState = {
   results: [],
   error: null,
}

const searchReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEARCH_PRODUCTS_SUCCESS:
         return {
            ...state,
            results: action.payload,
            error: null,
         };
      case SEARCH_PRODUCTS_FAILURE:
         return {
            ...state,
            results: [],
            error: action.payload
         };
      default:
         return state;
   }
};

export default searchReducer
