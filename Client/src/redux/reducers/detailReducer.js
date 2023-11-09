import { GET_DETAIL, CREATE_REVIEW, LOAD_REVIEWS } from "../actionTypes";

const initialState = {
    detail: {},
    reviews: [],
}
const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }

        case CREATE_REVIEW:
            // Agregar lógica para manejar la creación de reseñas aquí
            return {
                ...state,
                reviews: [...state.reviews, action.payload],
            };
        case LOAD_REVIEWS:
            // Agregar lógica para manejar la carga de reseñas aquí
            return {
                ...state,
                reviews: action.payload,
            };

        default:
            return { ...state }
    }
}

export default detailReducer;