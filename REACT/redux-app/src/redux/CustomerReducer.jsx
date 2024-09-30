import {SET_CUSTOMERS, ADD_CUSTOMERS,UPDATE_CUSTOMERS,DELETE_CUSTOMER} from "./CustomerAction";

const initialState = {
    customers : [],
};

const CustomerReducer = (state = initialState,action) => {
    switch(action.type){
        
        case SET_CUSTOMERS:
            return {...state,customers:action.payload};

        case ADD_CUSTOMERS:
            return state;

        case UPDATE_CUSTOMERS:
            return state;
        
        case DELETE_CUSTOMER:
            return state;
    }
};
export default CustomerReducer;