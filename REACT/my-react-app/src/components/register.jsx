import { useState } from "react";
import AuthService from "../services/authservice"; // Import the AuthService

function Register() {
    // Define state for each registration field individually
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [contactnumber, setContactnumber] = useState('');

    // Registration logic
    const onRegister = () => {
        // Create a newUser object using the state values
        const newUser = {
            email,
            password,
            firstname,
            lastname,
            contactnumber
        };

        // Register the user through AuthService
        AuthService.register(newUser);

        // Reset The Form After Registration
        setEmail('');
        setPassword('');
        setFirstname('');
        setLastname('');
        setContactnumber('');
    };

    return (
        <div>
            <h2>Register</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Email</td>
                        <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>First Name</td>
                        <td><input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td><input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Contact Number</td>
                        <td><input type="text" value={contactnumber} onChange={(e) => setContactnumber(e.target.value)} /></td>
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
