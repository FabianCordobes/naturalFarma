import { GET_DETAIL } from "../actionTypes";

const initialState = {
    detail: {}
}
const detailReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DETAIL:
        return{
            ...state,
            detail: action.payload
        }

        default:
            return {...state}
    }
}

export default detailReducer;