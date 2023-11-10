import { CREATE_REVIEW_ERROR, CREATE_REVIEW_SUCCESS, GET_DETAIL, GET_PRODUCT_REVIEWS_ERROR, GET_PRODUCT_REVIEWS_SUCCESS } from "../actionTypes";

const initialState = {
    detail: {},
    reviews: [],
    createReviewError: null,
    getProductReviewsError: null,
}
const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
            case CREATE_REVIEW_SUCCESS:
                return {
                    ...state,
                    reviews: [...state.reviews, action.payload],
                    createReviewError: null,
                };
    
            case CREATE_REVIEW_ERROR:
                return {
                    ...state,
                    createReviewError: action.payload,
                };
    
            case GET_PRODUCT_REVIEWS_SUCCESS:
                return {
                    ...state,
                    reviews: action.payload,
                    getProductReviewsError: null,
                };
    
            case GET_PRODUCT_REVIEWS_ERROR:
                return {
                    ...state,
                    getProductReviewsError: action.payload,
                };
        default:
            return { ...state }
    }
}

export default detailReducer;