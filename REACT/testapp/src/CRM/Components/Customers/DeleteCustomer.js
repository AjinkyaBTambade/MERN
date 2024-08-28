import { useParams, useNavigate } from "react-router-dom";
import CustomerService from "../../Services/CustomerService";
import { useEffect } from "react";

const DeleteCustomer = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            CustomerService.remove(parseInt(id));
            navigate("/customers");
        }
    }, [id, navigate]);

    return null;
}

export default DeleteCustomer;
