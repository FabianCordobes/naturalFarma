import { SEARCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS_FAILURE , CLEAR_PRODUCTS, ORDER_BY_NAME, ORDER_BY_PRICE, ORDER_BY_STOCK, FILTER_BY_CATEGORY} from '../actionTypes';

const initialState = {
   products: [],
   productsAux:[],
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
            productsAux: action.payload,
            error: null,
         };
      case SEARCH_PRODUCTS_FAILURE:
         return {
            ...state,
            products: [],
            productsAux:[],
            error: action.payload
         };
      case ORDER_BY_NAME:
         const sortedProductsByName = [...state.products].sort((a, b) => {
            if (action.payload === 'asc') {
               return a.brand.localeCompare(b.brand); // ASC
            } else {
               return b.brand.localeCompare(a.brand); // DESC
            }
         });
         return {
            ...state,
            products: sortedProductsByName,
         };
      case ORDER_BY_PRICE:
         const sortedProductsByPrice = [...state.products].sort((a, b) => {
            if (action.payload === 'min') {
               return a.price - b.price; // Menor a mayor
            } else {
               return b.price - a.price; // Mayor a menor
            }
         });
         return {
            ...state,
            products: sortedProductsByPrice,
         };
            
      case ORDER_BY_STOCK:
         const sortedProductsByStock = [...state.products].sort((a, b) => {
            if (action.payload === 'min') {
               return a.stocks - b.stocks; // Menor a mayor
            } else {
               return b.stocks - a.stocks; // Mayor a menor
            }
         });
         return {
            ...state,
            products: sortedProductsByStock,
         };
         
      case FILTER_BY_CATEGORY:
         console.log(action.payload)
         const filteredProducts = state.productsAux.filter(product => product.category === action.payload)
         console.log("que pedo wey:"+JSON.stringify(filteredProducts))
         if(action.payload != "all" && filteredProducts){
            return {
               ...state,
               products: filteredProducts
            }
         }
         else if(action.payload === "all"){
            return {
               ...state,
               products: state.productsAux
            }
         }
      default:
         return state;
   }
};

export default searchReducer