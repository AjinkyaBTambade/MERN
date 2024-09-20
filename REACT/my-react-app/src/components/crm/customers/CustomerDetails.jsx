// CustomerDetails.jsx
import React from 'react';
import CustomerService from "../../../services/customerservice";
import { useParams } from "react-router-dom";

const CustomerDetails = () => {
    const { id } = useParams(); // get customer ID from URL parameters
    const [customer, setCustomer] = React.useState(null); 
    React.useEffect(() => {
        const fetchedCustomer = CustomerService.getCustomerById(parseInt(id));
        if (fetchedCustomer) {
            setCustomer(fetchedCustomer);
        }
    }, [id]);

    if (!customer) {
        return <p>Loading customer details...</p>;
    }

    return (
        <>
            <h3>Customer Details</h3>
            <p>Name: {customer.firstname} {customer.lastname}</p>
            <p>Email: {customer.email}</p>
            <p>Contact Number: {customer.contactnumber}</p>
        </>
    );
};

export default CustomerDetails;
