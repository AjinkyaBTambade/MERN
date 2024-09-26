import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CustomerContext from '../context/CustomerContext';

const CustomerDetails = () => {
  const { customers } = useContext(CustomerContext);
  const { id } = useParams(); 
  
  const customer = customers.find((c) => c.id === parseInt(id));

  return (
    <div>
      {customer ? (
        <div>
          <h2>Customer Details</h2>
          <p><strong>ID:</strong> {customer.id}</p>
          <p><strong>First Name:</strong> {customer.firstName}</p>
          <p><strong>Last Name:</strong> {customer.lastName}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Contact Number:</strong> {customer.contactNumber}</p>
        </div>
      ) : (
        <p>Customer not found.</p>
      )}
    </div>
  );
};

export default CustomerDetails;
