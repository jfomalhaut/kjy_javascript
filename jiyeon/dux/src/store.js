import rootReduceer from './reducers';
import { createStore } from 'redux';

const store = createStore(rootReduceer);

export default store;