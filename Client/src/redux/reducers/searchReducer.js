import { SEARCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS_FAILURE , ORDER_BY_NAME, ORDER_BY_PRICE,ORDER_BY_STOCK} from '../actionTypes';

const initialState = {
   products: [],
   productAux: [],
   error: null,
}


const searchReducer = (state = initialState, action) => {
   switch (action.type) {
      case CLEAR_PRODUCTS:
         return initialState;
      case SEARCH_PRODUCTS_SUCCESS:
         return {
            
            ...state,
            products: action.payload,
            productAux: action.payload,
            error: null,
         };
      case SEARCH_PRODUCTS_FAILURE:
         return {
            ...state,
            products: [],
            productAux: [],
            error: action.payload
         };
      case ORDER_BY_NAME:
         let orderByName;
         if (action.payload === "asc") {
             orderByName = state.products.slice().sort((a, b) => a.brand.localeCompare(b.brand));
         }
         if (action.payload === "desc") {
            orderByName = state.products.slice().sort((a, b) => b.brand.localeCompare(a.brand));
         }
         return {
            ...state,
            products: orderByName
         };
      
      case ORDER_BY_PRICE:
         let orderByPrice;
         if (action.payload === "min") {
            orderByPrice = state.products.slice().sort((a, b) => a.price - b.price);
         }
         if (action.payload === "max") {
            orderByPrice = state.products.slice().sort((a, b) => b.price - a.price);
         }
         return {
            ...state,
            products: orderByPrice
         };
      
      case ORDER_BY_STOCK:
         let orderByStock;
         if (action.payload === "min") {
            orderByStock = state.products.slice().sort((a, b) => a.stocks - b.stocks);
         }
         if (action.payload === "max") {
            orderByStock = state.products.slice().sort((a, b) => b.stocks - a.stocks);
         }
         return {
            ...state,
            products: orderByStock
         };


      
      default:
         return state;
   }
};

export default searchReducer
