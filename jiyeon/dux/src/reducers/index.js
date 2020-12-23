
import CounterReducer from './CounterReducer';
import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';

const rootReduceer = combineReducers({
    CounterReducer, AuthReducer
});

export default rootReduceer;