import { CustomerService } from "../Component/service/CustomerService";

export const SET_CUSTOMERS = 'SET_CUSTOMERS';
export const ADD_CUSTOMERS = 'ADD_CUSTOMERS';
export const UPDATE_CUSTOMERS = 'UPDATE_CUSTOMERS';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

export const setCustomers = () => {
    return (dispatch) => {
        const customers = CustomerService.getCustomers();
        dispatch({ type: SET_CUSTOMERS, payload: customers });
    };
};

export const addCustomer = (customer) => {
    return (dispatch) => {
        CustomerService.addCustomer(customer);
        dispatch(setCustomers());
    };
};
  
export const updateCustomer = (customer) => {
    return (dispatch) => {
        CustomerService.updateCustomer(customer);
        dispatch(setCustomers());
    };
};
  
export const deleteCustomer = (id) => {
    return (dispatch) => {
        CustomerService.deleteCustomer(id);
        dispatch(setCustomers());
    };
};