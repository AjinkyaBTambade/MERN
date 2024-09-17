import { useState } from "react";
import AuthService from "../services/authservice"; // Import the AuthService

function Register() {
    // Define state for registration
    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        contactnumber: ''
    });

    // Handle input change for registration fields
    const handleRegisterChange = (event) => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        });
    };

    // Registration logic
    const onRegister = () => {
        // Register the user through AuthService
        AuthService.register(newUser);

        // Optionally reset the form after registration
        setNewUser({
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            contactnumber: ''
        });
    };
    return (
        <div>
            <h2>Register</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Email</td>
                        <td><input type="email" name="email" value={newUser.email} onChange={handleRegisterChange}/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="password" value={newUser.password} onChange={handleRegisterChange}/></td>
                    </tr>
                    <tr>
                        <td>First Name</td>
                        <td><input type="text" name="firstname" value={newUser.firstname} onChange={handleRegisterChange}/></td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td><input type="text" name="lastname" value={newUser.lastname} onChange={handleRegisterChange}/></td>
                    </tr>
                    <tr>
                        <td>Contact Number</td>
                        <td><input type="text" name="contactnumber" value={newUser.contactnumber} onChange={handleRegisterChange}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button onClick={onRegister}>Register</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Register;
