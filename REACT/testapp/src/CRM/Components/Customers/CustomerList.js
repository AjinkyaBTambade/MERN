import { Link, Outlet, useNavigate } from "react-router-dom";
import CustomerService from "../../Services/CustomerService";

const List = () => {
    const customers = CustomerService.getAll();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        console.log('Deleting customer with id:', id);
        CustomerService.remove(id);
        navigate("/customers");
    };

    return (
        <div>
            <h2>Customer Details</h2>
            <Link to="/customers/add">Add New Customer</Link>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>
                        <Link to={`/customers/${customer.id}`}>{customer.Name}</Link>
                        {' | '}<Link to={`/customers/update/${customer.id}`}>Update</Link>
                        {' | '}<button onClick={() => handleDelete(customer.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
}

export default List;
