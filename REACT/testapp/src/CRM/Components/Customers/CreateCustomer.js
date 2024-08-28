import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomerService from "../../Services/CustomerService";

const CreateCustomer = () => {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({ Name: '', Email: '', phoneNumber: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCustomer = { id: Date.now(), ...customer };
        CustomerService.insert(newCustomer);
        navigate("/customers");
    };

    return (
        <div>
            <h2>Create New Customer</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="Name" value={customer.Name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="Email" value={customer.Email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="text" name="phoneNumber" value={customer.phoneNumber} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateCustomer;
