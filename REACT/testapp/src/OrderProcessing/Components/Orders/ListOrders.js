import React from 'react';
import { Link } from 'react-router-dom';
import OrderService from '../../Services/OrderService';

const ListOrders = () => {
    const orders = OrderService.getAll();

    return (
        <div>
            <h2>Order List</h2>
            <Link to="/orders/create">Add New Order</Link>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        Order ID: {order.id} - {order.customerName} - {order.totalAmount} USD
                        {' | '}
                        <Link to={`/orders/update/${order.id}`}>Update</Link>
                        {' | '}
                        <Link to={`/orders/delete/${order.id}`}>Delete</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListOrders;
