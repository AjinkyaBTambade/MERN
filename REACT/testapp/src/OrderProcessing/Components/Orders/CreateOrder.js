import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderService from '../../Services/OrderService';

const CreateOrder = () => {
    const [order, setOrder] = useState({id: '', customerName: '', totalAmount: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newOrder = { id: Date.now(), ...order };
        OrderService.insert(newOrder);
        navigate("/orders");
    };


    return (
        <div>
            <h2>Create New Order</h2>
            <form onSubmit={handleSubmit}>
            <label>
                    Id:
                    <input type="number" name="id" value={order.customerId} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Customer Name:
                    <input type="text" name="customerName" value={order.customerName} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Total Amount:
                    <input type="number" name="totalAmount" value={order.totalAmount} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateOrder;
