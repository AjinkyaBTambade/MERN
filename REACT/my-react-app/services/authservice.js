// Service: AuthService
let users = [
    { id: 1, email: 'ravi.tambade@transflower.in', password: 'seed', firstname: "Ravi", lastname: "Tambade", contactnumber: "9881735801" },
    { id: 2, email: 'shubhangi.tambade@transflower.in', password: 'transflower', firstname: "Shubhangi", lastname: "Tambade", contactnumber: "9881735801" },
    { id: 3, email: 'sanika.bhor@gmail.com', password: 'pvg', firstname: "Sankia", lastname: "Bhor", contactnumber: "9881735801" },
    { id: 4, email: 'nikhil.navale@gmail.com', password: 'seed', firstname: "Nikhil", lastname: "Navale", contactnumber: "9881735801" },
    { id: 5, email: 'shreedhar.patil@gmail.com', password: 'seed', firstname: "Shreedhar", lastname: "Patil", contactnumber: "9881735801" },
    { id: 6, email: 'sharan.kulkarni@gmail.com', password: 'seed', firstname: "Sharan", lastname: "Kulkarni", contactnumber: "9881735801" },
    { id: 7, email: 'kartik.g@gmail.com', password: 'seed', firstname: "Kartik", lastname: "G", contactnumber: "9881735801" },
    { id: 8, email: 'seema.patil@gmail.com', password: 'seed', firstname: "Seema", lastname: "Patil", contactnumber: "9881735801" },
];

const AuthService = {

    // Validate email and password for login
    validate(email, password) {
        let user = users.find((theUser) => (theUser.email === email && theUser.password === password));
        return user !== undefined;
    },

    // Get all users
    getAllUsers() {
        return users;
    },

    // Get a user by their ID
    getUserById(id) {
        return users.find((theUser) => (theUser.id === id));
    },

    // Register a new user
    register(theUser) {
        // Check if the user already exists based on the email
        const userExists = users.some((user) => user.email === theUser.email);
        if (userExists) {
            throw new Error('User already exists with this email');
        }

        // Add an id to the new user
        const newId = users.length + 1;
        const newUser = { id: newId, ...theUser };

        // Add the new user to the users array
        users.push(newUser);
        console.log("New user registered:", newUser);
    },

    // Update an existing user's information
    update(theUser) {
        users = users.filter(user => user.id !== theUser.id);
        users.push(theUser);
    },

    // Remove a user by ID
    remove(id) {
        users = users.filter(theUser => theUser.id !== id);
    }
}

export default AuthService;
