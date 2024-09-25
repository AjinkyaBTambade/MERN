let customers = [
    { id: 1, firstName: 'Ravi', lastName: 'Tambade', email: 'ravi.tambade@transflower.in', contactNumber: '9881375881' },
    { id: 2, firstName: 'Manasi', lastName: 'Nighot', email: 'manasi@domain.com', contactNumber: '8856214785' },
    { id: 3, firstName: 'Ajinkya', lastName: 'Tambade', email: 'ajinkya.tambade@transflower.in', contactNumber: '9561222333' },
    { id: 4, firstName: 'Aditya', lastName: 'Tambade', email: 'aditya.tambade@transflower.in', contactNumber: '7756529698' },
    { id: 5, firstName: 'Shreedhar', lastName: 'Patil', email: 'shree.patil@transflower.in', contactNumber: '9841477885' },
    { id: 6, firstName: 'Sharayu', lastName: 'Koli', email: 'sharayu@domain.com', contactNumber: '7410562485' }
];

const CustomerService = {
  getAll() {
    return customers;
  },

  getById(id) {
    return customers.find((customer) => customer.id === id);
  },

  insert(customer) {
    customers.push(customer);
    console.log(customers);
  },

  update(customer) {
    const index = customers.findIndex(c => c.id === customer.id);
    if (index !== -1) {
      customers[index] = customer;
    }
    console.log(customers);
  },

  remove(id) {
    customers = customers.filter(customer => customer.id !== id);
    console.log(customers);
  }
};

export default CustomerService;
