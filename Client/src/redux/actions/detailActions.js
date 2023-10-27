import { GET_DETAIL } from "../actionTypes";
import axios from "axios";

export const getDetail = (id) => {
    return async function(dispatch){
        try{
            let response = await axios.get(`http://localhost:3001/product/${id}`)
            return dispatch({
                type: GET_DETAIL,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export default getDetail;
