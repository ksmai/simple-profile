import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';

import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));

export default store;
