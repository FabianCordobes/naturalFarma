import { ORDER_BY_NAME, ORDER_BY_PRICE, ORDER_BY_STOCK } from "../actionTypes";

const initialState = {
    products: [],
    productsCopy: []
}

const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_BY_NAME:
            let sortAll = action.payload === 'asc'
            ? state.products.sort((a,b) => {
                if(a.name > b.name) {
                    return 1 
                }
                if(b.name > a.name) {
                    return -1
                }
                return 0
            })
            : state.products.sort((a, b) => {
                if(a.name > b.name) {
                    return -1
                }
                if(b.name > a.name) {
                    return 1
                }
                return 0
            })
            return {
                ...state,
                products: sortAll
            }

            case ORDER_BY_PRICE:
            let sortedPrice = [...state.products]

            if(action.payload === "min"){
                sortedPrice.sort((a,b) => a.price - b.price)
            }
            if(action.payload === "max"){
                sortedPrice.sort((a,b) => b.price - a.price)
            }
            return {
                ...state,
                products: sortedPrice
            }

            case ORDER_BY_STOCK:
                case ORDER_BY_PRICE:
                    let sortedStock = [...state.products]
        
                    if(action.payload === "min"){
                        sortedPrice.sort((a,b) => a.price - b.price)
                    }
                    if(action.payload === "max"){
                        sortedPrice.sort((a,b) => b.price - a.price)
                    }
                    return {
                        ...state,
                        products: sortedStock
                    }

            default:
                return {...state}
    }
}

export default sortReducer;