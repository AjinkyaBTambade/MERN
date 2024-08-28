import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import OrderService from '../../Services/OrderService';

const UpdateOrder = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState({ customerName: '', totalAmount: '' });

    useEffect(() => {
        const existingOrder = OrderService.getById(parseInt(id));
        if (existingOrder) {
            setOrder(existingOrder);
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        OrderService.update({ id: parseInt(id), ...order });
        navigate("/orders");
    };

    return (
        <div>
            <h2>Update Order</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Customer Name:
                    <input type="text" name="customerName" value={order.customerName} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Total Amount (USD):
                    <input type="number" name="totalAmount" value={order.totalAmount} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateOrder;
