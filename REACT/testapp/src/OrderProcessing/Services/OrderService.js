const initialOrders = [
    { id: 1, customerName: 'Ajinkya', totalAmount: 250, orderDate: '2024-08-01', status: 'Processing' },
    { id: 2, customerName: 'Shridhar', totalAmount: 150, orderDate: '2024-08-05', status: 'Shipped' },
    { id: 3, customerName: 'Bhupendra', totalAmount: 300, orderDate: '2024-08-10', status: 'Delivered' },
    { id: 4, customerName: 'Ritesh', totalAmount: 400, orderDate: '2024-08-12', status: 'Pending' },
    { id: 5, customerName: 'Nayan', totalAmount: 275, orderDate: '2024-08-15', status: 'Cancelled' },
    { id: 6, customerName: 'AJ', totalAmount: 500, orderDate: '2024-08-18', status: 'Processing' }
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
