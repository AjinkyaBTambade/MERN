import React, { createContext, useState, useEffect } from 'react';
import CustomerService from '../services/CustomerService';

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const initialCustomers = CustomerService.getAll();
    setCustomers(initialCustomers);
  }, []);

  const addCustomer = (customer) => {
    const nextId = customers.length > 0 ? Math.max(...customers.map(c => c.id)) + 1 : 1;
    const newCustomer = { ...customer, id: nextId };
    CustomerService.insert(newCustomer);
    setCustomers([...customers, newCustomer]);
  };

  const updateCustomer = (updatedCustomer) => {
    CustomerService.update(updatedCustomer);
    const updatedCustomers = customers.map(c => (c.id === updatedCustomer.id ? updatedCustomer : c));
    setCustomers(updatedCustomers);
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
