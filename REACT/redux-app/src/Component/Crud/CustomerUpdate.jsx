import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCustomer } from '../../redux/CustomerAction';

const CustomerUpdate = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const customers = useSelector((state) => state.customer.customers);
  const [customer, setCustomer] = useState({ firstName: '', lastName: '', email: '', contactnumber: '' });

  useEffect(() => {
    const existingCustomer = customers.find(c => c.id === parseInt(id));
    if (existingCustomer) {
      setCustomer(existingCustomer);
    } else {
      navigate('/');
    }
  }, [id, customers, navigate]);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCustomer(customer));
    navigate('/');
  };

  return (
    <div>
      <h2>Update Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label><input type="text" name="firstName" value={customer.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name:</label><input type="text" name="lastName" value={customer.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label><input type="email" name="email" value={customer.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact Number:</label><input type="text" name="contactnumber" value={customer.contactnumber} onChange={handleChange} required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default CustomerUpdate;
