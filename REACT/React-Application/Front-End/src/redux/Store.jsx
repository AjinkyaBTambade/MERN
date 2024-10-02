import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Use named import for thunk
import { ProductReducer } from './ProductReducer';

const rootReducer = combineReducers({
    productState: ProductReducer
});

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
