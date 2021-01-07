import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
	CounterReducer,
	AuthReducer
});

export default rootReducer;