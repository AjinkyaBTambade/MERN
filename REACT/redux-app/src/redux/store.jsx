
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import CustomerReducer from "./CustomerReducer";

const rootReducer = combineReducers({
  customer: CustomerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
