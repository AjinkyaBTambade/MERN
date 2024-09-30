// src/components/Customers.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Customers = () => {
  const customers = useSelector((state)=>state.customer.customers);

  return (
    <div>
      <h1>Customer's Information</h1>
      <Link to="/insert">Insert New Customer</Link>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>Customer :- 
            {customer.firstName} {customer.lastName}| |
            <Link to={`/customers/${customer.id}`}>Details</Link> | |
            <Link to={`/update/${customer.id}`}>Update</Link> | |
            <Link to={`/delete/${customer.id}`}>Delete</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
