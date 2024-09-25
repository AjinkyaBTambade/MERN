import React, { createContext, useState, useEffect } from 'react';
import CustomerService from '../services/CustomerService'; // Import the service

// Step 1: Create context
const CustomerContext = createContext();

// Step 2: Define Provider
export function CustomerProvider({ children }) {
  const [customers, setCustomers] = useState([]);

 
  useEffect(() => {
    const fetchCustomers = () => {
      const initialCustomers = CustomerService.getAll(); // Get All Customers from service
      setCustomers(initialCustomers);
    };

    fetchCustomers();
  }, []); 

  const addCustomer = (customer) => {
    CustomerService.insert(customer); 
    setCustomers([...customers, { ...customer, id: customers.length + 1 }]);
  };

  const updateCustomer = (updatedCustomer) => {
    CustomerService.update(updatedCustomer);
    setCustomers(customers.map(c => (c.id === updatedCustomer.id ? updatedCustomer : c)));
  };

  const deleteCustomer = (id) => {
    CustomerService.remove(id); 
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer, updateCustomer, deleteCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
}

export default CustomerContext;
