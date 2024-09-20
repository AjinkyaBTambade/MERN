
let customers = [
    { id: 1, email: 'ravi.tambade@transflower.in', firstname: "Ravi", lastname: "Tambade", contactnumber: "9881735801", password: "password1" },
    { id: 2, email: 'shubhangi.tambade@transflower.in', firstname: "Shubhangi", lastname: "Tambade", contactnumber: "9881735801", password: "password2" },
    { id: 3, email: 'sanika.bhor@gmail.com', firstname: "Sanika", lastname: "Bhor", contactnumber: "9881735801", password: "password3" },
    { id: 4, email: 'nikhil.navale@gmail.com', firstname: "Nikhil", lastname: "Navale", contactnumber: "9881735801", password: "password4" },
    { id: 5, email: 'shreedhar.patil@gmail.com', firstname: "Shreedhar", lastname: "Patil", contactnumber: "9881735801", password: "password5" },
    { id: 6, email: 'sharan.kulkarni@gmail.com', firstname: "Sharan", lastname: "Kulkarni", contactnumber: "9881735801", password: "password6" },
    { id: 7, email: 'kartik.g@gmail.com', firstname: "Kartik", lastname: "G", contactnumber: "9881735801", password: "password7" },    
    { id: 8, email: 'seema.patil@gmail.com', firstname: "Seema", lastname: "Patil", contactnumber: "9881735801", password: "password8" },
];

// Service
const CustomerService = {
    // Validate customer by email and password
    validate(email, password) {
        const customer = customers.find(
            (theCustomer) => theCustomer.email === email && theCustomer.password === password
        );
        return customer !== undefined;
    },

    // Get all customers
    getAll() {    
        return customers;
    },

    // Get customer by ID
    getCustomerById(id) {
        return customers.find(customer => customer.id === id);
    },

    // Register a new customer
    register(theCustomer) {
        // Ensure the customer ID is unique
        const exists = customers.some(customer => customer.id === theCustomer.id);
        if (exists) {
            throw new Error(`Customer with ID ${theCustomer.id} already exists.`);
        }
        customers.push(theCustomer);
    },

    // Update existing customer
    update(theCustomer) {
        const index = customers.findIndex(customer => customer.id === theCustomer.id);
        if (index !== -1) {
            customers[index] = theCustomer;
        } else {
            throw new Error(`Customer with ID ${theCustomer.id} not found.`);
        }
    },

    // Remove customer by ID
    remove(id) {
        customers = customers.filter(customer => customer.id !== id);
    }
}

export default CustomerService;
