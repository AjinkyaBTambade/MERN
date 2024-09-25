import React, { createContext, useState } from 'react';

//Step 1 : Create context at application level
// Create a context for the shopping cart

const CustomerContext = createContext();

//Step 2: Define Provider
// Create a provider component
export function CustomerProvider({ children }) {

  //Step 3: Define global State
  const [customers, setCustomers] = useState([]);

  const addCustomer = (customer) => {
    setCustomers([...customers, { ...customer, id: customers.length + 1 }]);
  };

  const updateCustomer = (updatedCustomer) => {
    setCustomers(customers.map(c => (c.id === updatedCustomer.id ? updatedCustomer : c)));
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer, updateCustomer, deleteCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};
export default CustomerContext;

/*
 eCommerce application, 
 you can use the useContext hook to manage and
  share important data across various components.
*/