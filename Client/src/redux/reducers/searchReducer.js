import { SEARCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS_FAILURE , CLEAR_PRODUCTS, UPDATE_SEARCH_QUERY} from '../actionTypes';

const initialState = {
   products: [],
   searchQuery: '',
   error: null,
}

const searchReducer = (state = initialState, action) => {
   switch (action.type) {
      case CLEAR_PRODUCTS:
         return {
            ...initialState,
            searchQuery: '', // Limpia la cadena de búsqueda al borrar los productos
         };
      case SEARCH_PRODUCTS_SUCCESS:
         return {
            ...state,
            products: action.payload,
            error: null,
         };
      case SEARCH_PRODUCTS_FAILURE:
         return {
            ...state,
            products: [],
            error: action.payload
         };
      case UPDATE_SEARCH_QUERY:
         return {
            ...state,
            searchQuery: action.payload,
         };
      default:
         return state;
   }
};

export default searchReducer