import { useState } from "react";
import AuthService from "../../services/authservice";

function Register() {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [contactnumber, setContactnumber] = useState('');
    const [message, setMessage] = useState('');

    const onRegister = (event) => {
        event.preventDefault();
        if (!id || !email || !password || !firstname || !lastname || !contactnumber) {
            setMessage('Please fill in all required fields.');
            return;
        }
        const newUser = {
            id,
            email,
            password,
            firstname,
            lastname,
            contactnumber
        };
        AuthService.register(newUser).then(response => {
            if (response.success) {
                setMessage('Registration successful!');
            } 
            else {
                setMessage('Registration failed. Please try again.');
            }
        })
        .catch(() => {
            setMessage('Registration failed. Please try again.');
        });
        console.log("First Name:" +firstname,"Last Name:" +lastname,"Contact Number:" +contactnumber,"Email Id:" +email,"Password:" +password);
        /*setId('');
        setEmail('');
        setPassword('');
        setFirstname('');
        setLastname('');
        setContactnumber('');*/
    };

    return (
        <div>
            <h2>Register</h2>
            <table>
                <tbody>
                    <tr>
                        <td>ID:</td>
                        <td><input type="text" value={id} onChange={(e) => setId(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>First Name:</td>
                        <td><input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td><input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Contact Number:</td>
                        <td><input type="text" value={contactnumber} onChange={(e) => setContactnumber(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Email ID:</td>
                        <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button onClick={onRegister}>Register</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {message && <p>{message}</p>}
        </div>
    );
}
export default Register;