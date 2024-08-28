import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomerService from "../../Services/CustomerService";

const UpdateCustomer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({ Name: '', Email: '', phoneNumber: '' });

    useEffect(() => {
        if (id) {
            const existingCustomer = CustomerService.getById(parseInt(id));
            if (existingCustomer) {
                setCustomer(existingCustomer);
            }
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        CustomerService.update(customer);
        navigate("/customers");
    };

    return (
        <div>
            <h2>Update Customer</h2>
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
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default UpdateCustomer;
