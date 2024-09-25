import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomerContext from '../context/CustomerContext';

const DeleteCustomer = () => {
  const { deleteCustomer, customers } = useContext(CustomerContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const customer = customers.find((c) => c.id === parseInt(id));

  const handleDelete = () => {
    deleteCustomer(customer.id);
    navigate('/');
  };

  return (
    <div>
      <h2>Delete Customer</h2>
      {customer ? (
        <div>
          <p>Are you sure you want to delete {customer.firstName} {customer.lastName}?</p>
          <button onClick={handleDelete}>Yes, Delete</button>
          <button onClick={() => navigate('/')}>Cancel</button>
        </div>
      ) : (
        <p>Customer not found</p>
      )}
    </div>
  );
};

export default DeleteCustomer;
