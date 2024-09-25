import { useState, useEffect } from 'react';

const CustomerForm = ({ onSubmit, initialData = {} }) => {
  const [customer, setCustomer] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    ...initialData, // pre-fill if data is provided (for update)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(customer); // Callback to the parent (Create or Update)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={customer.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={customer.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={customer.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="contactNumber"
        placeholder="Contact Number"
        value={customer.contactNumber}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerForm;
