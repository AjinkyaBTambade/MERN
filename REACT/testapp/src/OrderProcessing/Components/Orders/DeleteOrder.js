import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import OrderService from '../../Services/OrderService';

const DeleteOrder = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        OrderService.remove(parseInt(id));
        navigate("/orders");
    }, [id, navigate]);

    return null;
};

export default DeleteOrder;
