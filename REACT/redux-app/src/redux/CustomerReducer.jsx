import { SET_CUSTOMERS, ADD_CUSTOMERS, UPDATE_CUSTOMERS, DELETE_CUSTOMER } from './CustomerAction';

const initialState = {
  customers: [],
};

const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_CUSTOMERS:
      return { ...state, customers: action.payload };

    case ADD_CUSTOMERS:
      return { ...state, customers: [...state.customers, action.payload] };

    case UPDATE_CUSTOMERS:
      return {
        ...state,
        customers: state.customers.map((customer) =>
          customer.id === action.payload.id ? action.payload : customer
        ),
      };

    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((customer) => customer.id !== action.payload),
      };

    default:
      return state;
  }
};

export default CustomerReducer;
