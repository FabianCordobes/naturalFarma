import { DECREMENT_ALL, DECREMENT_CART_COUNT, INCREMENT_CART_COUNT } from "../actionTypes";


export const incrementCartCount = () => ({
	type: INCREMENT_CART_COUNT,
 });
 
 export const decrementCartCount = () => ({
	type: DECREMENT_CART_COUNT,
 });

 export const decrementAll = () => ({
	type: DECREMENT_ALL,
 });