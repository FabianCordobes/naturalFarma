import { combineReducers } from 'redux';
// import filterReducer from './filterReducers';
// import sortReducer from './sortReducer';
// import cartReducer from './cartReducer';
import searchReducer from './searchReducer';
import detailReducer from './detailReducer';
import userReducer from './userReducer';
import adminReducer from './adminReducer';


const rootReducer = combineReducers({
	
	search: searchReducer,

	detail: detailReducer,

	user: userReducer,

	admin: adminReducer,
});

export default rootReducer;
