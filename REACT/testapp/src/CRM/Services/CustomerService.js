
var customers = [
    { id: 1, Name: 'Ravi Kumar', Email: 'ravi.kumar@example.com', phoneNumber: '9876543210' },
    { id: 2, Name: 'Sneha Patil', Email: 'sneha.patil@example.com', phoneNumber: '8765432109' },
    { id: 3, Name: 'Amit Sharma', Email: 'amit.sharma@example.com', phoneNumber: '7654321098' },
    { id: 4, Name: 'Priya Singh', Email: 'priya.singh@example.com', phoneNumber: '6543210987' },
    { id: 5, Name: 'Rahul Verma', Email: 'rahul.verma@example.com', phoneNumber: '5432109876' },
    { id: 6, Name: 'Neha Mehta', Email: 'neha.mehta@example.com', phoneNumber: '4321098765' }
];

const CustomerService = {
    getAll() {
        return customers;
    },

    getById(id) {
        return customers.find(customer => customer.id === id);
    },

    insert(newCustomer) {
        customers.push(newCustomer);
        console.log(customers);
    },

    update(updatedCustomer) {
        const index = customers.findIndex(customer => customer.id === updatedCustomer.id);
        if (index !== -1) {
            customers[index] = updatedCustomer;
            console.log(customers);
        }
    },

    remove(id) {
        customers = customers.filter(customer => customer.id !== id);
        console.log(customers);
    }
}

export default CustomerService;
