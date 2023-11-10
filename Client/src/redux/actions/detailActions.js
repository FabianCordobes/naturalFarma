import { CREATE_REVIEW_ERROR, CREATE_REVIEW_SUCCESS, GET_DETAIL, GET_PRODUCT_REVIEWS_ERROR, GET_PRODUCT_REVIEWS_SUCCESS } from "../actionTypes";
import axios from "axios";

export const getDetail = (id) => {
    return async function (dispatch) {
        try {
            let response = await axios.get(`/product/${id}`)
            return dispatch({
                type: GET_DETAIL,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const createReview = (reviewData) => {
    return async (dispatch) => {
        try {
            // Hago la solicitud POST al servidor para crear la review
            const response = await axios.post('http://localhost:3001/review', reviewData);

            // Despachar una acción de éxito, con los datos si la solicitud es exitosa
            dispatch({
                type: CREATE_REVIEW_SUCCESS,
                payload: response.data, 
            });
        } catch (error) {
            // Despachar una acción de error si la solicitud falla
            dispatch({
                type: CREATE_REVIEW_ERROR,
                payload: error.message,
            });
        }
    };
};

export const getProductReviews = (productId) => {
    return async (dispatch) => {
        try {
            // Hago la solicitud GET al servidor para obtener las revisiones/reviews del producto
            const response = await axios.get(`http://localhost:3001/product/${productId}`);

            // Despachar una acción con las revisiones obtenidas, con los datos
            dispatch({
                type: GET_PRODUCT_REVIEWS_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            // Despachar una acción de error si la solicitud falla
            dispatch({
                type: GET_PRODUCT_REVIEWS_ERROR,
                payload: error.message,
            });
        }
    };
};

export default getDetail
