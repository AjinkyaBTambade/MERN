import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../../redux/CustomerAction';

const CustomerInsert = () => {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState({ firstName: '', lastName: '', email: '', contactnumber: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCustomer({ ...customer, id: Date.now() }));
    navigate('/');
  };

  return (
    <div>
      <h2>Insert New Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input 
            type="text" 
            name="firstName" 
            value={customer.firstName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input 
            type="text" 
            name="lastName"  
            value={customer.lastName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email"
            value={customer.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input 
            type="text" 
            name="contactnumber" 
            value={customer.contactnumber} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Insert</button>
      </form>
    </div>
  );
};

export default CustomerInsert;
