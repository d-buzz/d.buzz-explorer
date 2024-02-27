// /redux/store/configureStore.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(/* middleware goes here */));

export default store;
