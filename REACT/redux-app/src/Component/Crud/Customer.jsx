// src/components/Customer.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Customer = () => {
  const customers  = useSelector((state) => state.customer.customers);
  const { id } = useParams();
  const customer = customers.find(c => c.id === parseInt(id));

  if (!customer) {
    return <h2>Customer not found</h2>;
  }

  return (
    <div>
        <h2>Customer Details</h2>
        <p><strong>First Name:</strong> {customer.firstName}</p>
        <p><strong>Last Name:</strong> {customer.lastName}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Contact Number:</strong> {customer.contactnumber}</p>
    </div>
  );
};

export default Customer;
