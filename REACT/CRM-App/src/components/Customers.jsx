import { useContext } from 'react';
import CustomerContext from '../context/CustomerContext';
import { Link } from 'react-router-dom';

const Customers = () => {
  const { customers } = useContext(CustomerContext);

  return (
    <div>
      <h2>Customer List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.firstName} {customer.lastName}</td>
              <td>{customer.email}</td>
              <td>{customer.contactNumber}</td>
              <td>
                <Link to={`/details/${customer.id}`}>Details</Link> {/* Link to customer details */}
                {' | '}
                <Link to={`/update/${customer.id}`}>Update</Link>
                {' | '}
                <Link to={`/delete/${customer.id}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
