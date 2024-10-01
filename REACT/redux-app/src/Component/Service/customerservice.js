
const CUSTOMER_KEY = 'customers';

export const CustomerService = {
  getCustomers: () => {
    const customers = localStorage.getItem(CUSTOMER_KEY);
    return customers ? JSON.parse(customers) : [];
  },
  
  getCustomerById: (id) => {
    const customers = CustomerService.getCustomers();
    return customers.find(customer => customer.id === id);
  },

  addCustomer: (customer) => {
    const customers = CustomerService.getCustomers();
    customers.push(customer);
    localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customers));
  },

  updateCustomer: (updatedCustomer) => {
    let customers = CustomerService.getCustomers();
    customers = customers.map(customer =>
      customer.id === updatedCustomer.id ? updatedCustomer : customer
    );
    localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customers));
  },

  deleteCustomer: (id) => {
    let customers = CustomerService.getCustomers();
    customers = customers.filter(customer => customer.id !== id);
    localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customers));
  }
};
