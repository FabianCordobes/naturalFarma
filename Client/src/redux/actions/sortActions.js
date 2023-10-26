import { ORDER_BY_NAME, ORDER_BY_PRICE, ORDER_BY_STOCK } from "../actionTypes";

//ORDENAMIENTO POR NOMBRE ALFABETICO 
export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

//ORDENAMIENTO POR PRECIO DE MAYOR A MENOS Y VISCEVERSA
export const orderByPrice = (payload) => {
    return {
        type: ORDER_BY_PRICE,
        payload
    }
}

//ORDENAMIENTO POR STOCK SEGUN MENOR A MAYOY VISCEVERSA
export const orderByStock = (payload) => {
    return {
        type: ORDER_BY_STOCK,
        payload
    }
}