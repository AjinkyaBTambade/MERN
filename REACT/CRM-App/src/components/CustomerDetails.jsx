import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CustomerContext  from '../context/CustomerContext';

const CustomerDetails = () => {
  const { customers } = useContext(CustomerContext);
  const { id } = useParams(); // Get the customer ID from the route parameters

  // Find the customer with the matching ID
  const customer = customers.find((c) => c.id === parseInt(id));

  // Render details if the customer is found, otherwise show an error message
  return (
    <div>
      {customer ? (
        <div>
          <h2>Customer Details</h2>
          <p><strong>First Name:</strong> {customer.firstName}</p>
          <p><strong>Last Name:</strong> {customer.lastName}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Contact Number:</strong> {customer.contactNumber}</p>
          {/* You can extend this with more details like address, orders, etc. */}
        </div>
      ) : (
        <p>Customer not found.</p>
      )}
    </div>
  );
};

export default CustomerDetails;
