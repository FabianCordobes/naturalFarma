import { combineReducers } from 'redux';
// import filterReducer from './filterReducers';
import sortReducer from './sortReducer';
import searchReducer from './searchReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
	// filter: filterReducer,
	sort: sortReducer,
	search: searchReducer,
	cart: cartReducer,
});

export default rootReducer;
