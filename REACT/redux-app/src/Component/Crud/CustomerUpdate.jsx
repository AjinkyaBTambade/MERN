// src/components/CustomerUpdate.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCustomer } from '../../redux/CustomerAction';

const CustomerUpdate = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const customers = useSelector((state)=>state.customer.customers);
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    const existingCustomer = customers.find(c => c.id === parseInt(id));
    setCustomer(existingCustomer || {});
  }, [id, customers]);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCustomer(customer));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Customer</h2>
      <input type="text" name="firstName" value={customer.firstName || ''} onChange={handleChange} />
      <input type="text" name="lastName" value={customer.lastName || ''} onChange={handleChange} />
      <input type="email" name="email" value={customer.email || ''} onChange={handleChange} />
      <input type="text" name="contactnumber" value={customer.contactnumber || ''} onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
};

export default CustomerUpdate;
