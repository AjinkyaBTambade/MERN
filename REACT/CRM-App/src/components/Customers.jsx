import { useContext } from 'react';
import CustomerContext from '../context/CustomerContext';
import { Link } from 'react-router-dom';

const Customers = () => {
  const { customers } = useContext(CustomerContext);

  return (
    <div>
      <h2>Customer List</h2>
      <Link to="/add"><button>Add New Customer</button></Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.firstName} {customer.lastName}</td>
              <td>{customer.email}</td>
              <td>{customer.contactNumber}</td>
              <td>
                <Link to={`/details/${customer.id}`}>Details</Link>
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
