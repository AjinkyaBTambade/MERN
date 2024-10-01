
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCustomer, setCustomers } from '../../redux/CustomerAction';
import { useNavigate, useParams } from 'react-router-dom';

const CustomerDelete = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const customers = useSelector((state) => state.customer.customers);
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    if (customers.length === 0) {
      dispatch(setCustomers());
    } else {
      const existingCustomer = customers.find((c) => c.id === parseInt(id));
      setCustomer(existingCustomer);
    }
  }, [dispatch, customers, id]);

  const handleDelete = () => {
    if (customer) {
      dispatch(deleteCustomer(customer.id));
      navigate('/');
    } else {
      alert('Customer not found.');
      navigate('/');
    }
  };

  if (!customer) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Are you sure you want to delete {customer.firstName} {customer.lastName}?</h2>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={() => navigate('/')}>No</button>
    </div>
  );
};

export default CustomerDelete;
