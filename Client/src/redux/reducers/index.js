import { combineReducers } from 'redux';
// import filterReducer from './filterReducers';
// import sortReducer from './sortReducer';
// import cartReducer from './cartReducer';
import searchReducer from './searchReducer';
import detailReducer from './detailReducer';
import userReducer from './userReducer';
import adminReducer from './adminReducer';
import countReducer from './countReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';


const rootReducer = combineReducers({
	
	search: searchReducer,

	count: countReducer,

	detail: detailReducer,

	user: userReducer,

	admin: adminReducer,

	category: categoryReducer,

	product: productReducer,
});

export default rootReducer;