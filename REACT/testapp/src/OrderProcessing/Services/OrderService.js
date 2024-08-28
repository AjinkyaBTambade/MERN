const initialOrders = [
    { id: 1, customerName: 'John Doe', totalAmount: 250, orderDate: '2024-08-01T10:30:00Z', status: 'Processing' },
    { id: 2, customerName: 'Jane Smith', totalAmount: 150, orderDate: '2024-08-05T14:45:00Z', status: 'Shipped' },
    { id: 3, customerName: 'Michael Brown', totalAmount: 300, orderDate: '2024-08-10T09:00:00Z', status: 'Delivered' },
    { id: 4, customerName: 'Emily Johnson', totalAmount: 400, orderDate: '2024-08-12T11:20:00Z', status: 'Pending' },
    { id: 5, customerName: 'William Davis', totalAmount: 275, orderDate: '2024-08-15T15:30:00Z', status: 'Cancelled' },
    { id: 6, customerName: 'Sophia Martinez', totalAmount: 500, orderDate: '2024-08-18T17:40:00Z', status: 'Processing' }
];

localStorage.setItem('orders', JSON.stringify(initialOrders));


const OrderService = {
    getAll() {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        return orders;
    },

    getById(id) {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        return orders.find(order => order.id === id);
    },

    insert(newOrder) {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(newOrder);
        localStorage.setItem('orders', JSON.stringify(orders));
        console.log(orders);
    },

    update(updatedOrder) {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const index = orders.findIndex(order => order.id === updatedOrder.id);
        if (index !== -1) {
            orders[index] = updatedOrder;
            localStorage.setItem('orders', JSON.stringify(orders));
            console.log(orders);
        }
    },

    remove(id) {
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders = orders.filter(order => order.id !== id);
        localStorage.setItem('orders', JSON.stringify(orders));
        console.log(orders);
    }
}

export default OrderService;
