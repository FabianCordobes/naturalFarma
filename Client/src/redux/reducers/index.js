import { combineReducers } from 'redux';
// import filterReducer from './filterReducers';
// import sortReducer from './sortReducer';
import searchReducer from './searchReducer';
import cartReducer from './cartReducer';
import detailReducer from './detailReducer';


const rootReducer = combineReducers({
	// filter: filterReducer,
	// sort: sortReducer,
	search: searchReducer,
	cart: cartReducer,
	detail: detailReducer,
});

export default rootReducer;
