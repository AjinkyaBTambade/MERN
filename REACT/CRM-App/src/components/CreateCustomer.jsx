import { useContext } from 'react';
import  CustomerContext  from '../context/CustomerContext';
import CustomerForm from './CustomerForm';
import { useNavigate } from 'react-router-dom';

const CreateCustomer = () => {
  const { addCustomer } = useContext(CustomerContext);
  const navigate = useNavigate();

  const handleSubmit = (newCustomer) => {
    addCustomer(newCustomer);
    navigate('/');
  };

  return (
    <div>
      <h2>Create New Customer</h2>
      <CustomerForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateCustomer;
