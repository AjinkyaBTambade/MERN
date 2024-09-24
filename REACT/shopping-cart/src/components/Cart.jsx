import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

//state less component

function Cart() {
  const { cart, removeItem, getTotalPrice } = useContext(CartContext);
  return (
    <div>
      <h2>My  Shopping Cart</h2>
      <hr/>
    
      {cart.length === 0 ? (<p>Cart is empty</p>) : (
        <ul>
          {cart.map((item) => (
                      <li key={item.id}>
                        {item.name} -  ₹{item.price} x {item.quantity}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                      </li>
          ))}
        </ul>
      )}
      <hr/>
      <h3>Total Price: ${getTotalPrice().toFixed(2)}</h3>
    </div>
  );
}

export default Cart;