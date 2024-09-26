import React, { createContext, useState, useEffect } from 'react';
import CustomerService from '../services/CustomerService'; // Import the service


const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [customers, setCustomers] = useState([]);

  
  useEffect(() => {
    const fetchCustomers = () => {
      
      const storedCustomers = localStorage.getItem('customers');
      if (storedCustomers) {
        setCustomers(JSON.parse(storedCustomers)); // Use stored data
      } else {
        const initialCustomers = CustomerService.getAll();
        setCustomers(initialCustomers);
        localStorage.setItem('customers', JSON.stringify(initialCustomers)); // Save to localStorage
      }
    };

    fetchCustomers();
  }, []); 

 
  const saveCustomersToLocalStorage = (updatedCustomers) => {
    localStorage.setItem('customers', JSON.stringify(updatedCustomers));
  };

  
  const addCustomer = (customer) => {
    const nextId = customers.length > 0 ? Math.max(...customers.map(c => c.id)) + 1 : 1;
    const newCustomer = { ...customer, id: nextId };

    const updatedCustomers = [...customers, newCustomer];
    setCustomers(updatedCustomers);
    saveCustomersToLocalStorage(updatedCustomers); 
  };

  const updateCustomer = (updatedCustomer) => {
    const updatedCustomers = customers.map(c => (c.id === updatedCustomer.id ? updatedCustomer : c));
    setCustomers(updatedCustomers); 
    saveCustomersToLocalStorage(updatedCustomers); 
  };

  
  const deleteCustomer = (id) => {
    const updatedCustomers = customers.filter(customer => customer.id !== id);
    setCustomers(updatedCustomers); 
    saveCustomersToLocalStorage(updatedCustomers);
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer, updateCustomer, deleteCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
}

export default CustomerContext;
