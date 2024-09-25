import { useContext, useEffect, useState } from 'react';
import  CustomerContext  from '../context/CustomerContext';
import { useParams, useNavigate } from 'react-router-dom';
import CustomerForm from './CustomerForm';

const UpdateCustomer = () => {
  const { customers, updateCustomer } = useContext(CustomerContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const customerToEdit = customers.find((c) => c.id === parseInt(id));
    if (customerToEdit) setInitialData(customerToEdit);
  }, [id, customers]);

  const handleSubmit = (updatedCustomer) => {
    updateCustomer({ ...updatedCustomer, id: parseInt(id) });
    navigate('/');
  };

  return (
    <div>
      <h2>Update Customer</h2>
      {initialData ? (
        <CustomerForm onSubmit={handleSubmit} initialData={initialData} />
      ) : (
        <p>Loading customer data...</p>
      )}
    </div>
  );
};

export default UpdateCustomer;
