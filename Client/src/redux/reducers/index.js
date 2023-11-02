import { combineReducers } from 'redux';
// import filterReducer from './filterReducers';
// import sortReducer from './sortReducer';
// import cartReducer from './cartReducer';
import searchReducer from './searchReducer';
import detailReducer from './detailReducer';


const rootReducer = combineReducers({
	
	search: searchReducer,

	detail: detailReducer,
});

export default rootReducer;
