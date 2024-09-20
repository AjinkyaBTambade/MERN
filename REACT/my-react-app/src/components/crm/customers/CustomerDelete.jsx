// components/CustomerDelete.js

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomerService from "../../../services/customerservice";

const CustomerDelete = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const existingCustomer = CustomerService.getCustomerById(parseInt(id));
        if (existingCustomer) {
            setCustomer(existingCustomer);
        } else {
            setError(`Customer with ID ${id} not found.`);
        }
    }, [id]);

    const handleYes = () => {
        try {
            CustomerService.remove(parseInt(id));
            alert("Customer deleted successfully.");
            navigate("/customers"); 
        } catch (err) {
            setError(err.message);
        }
    }

    const handleNo = () => {
        navigate("/customers");
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!customer) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h3>Customer Details</h3>
            <p> Name: {customer.firstname} {customer.lastname}</p>
            <p>Email: {customer.email}</p>
            <p>Contact Number: {customer.contactnumber}</p>

            <h3>Do you want to delete this Customer?</h3>
            <button onClick={handleYes}>Yes</button>
            <button onClick={handleNo}>No</button>
        </>
    );
};

export default CustomerDelete;
