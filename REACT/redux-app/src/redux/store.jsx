import { legacy_createStore as createStore} from "redux";
import CustomerReducer from "./CustomerReducer";

const store=createStore(CustomerReducer);
export default store;