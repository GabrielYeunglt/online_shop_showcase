// src/components/Cart.js
import React from 'react';
import { Product } from '../../lib/type';

type CartProps = {
    cartItems: Product[];
    removeFromCart: (id: number) => void;
}

const Cart = ({ cartItems, removeFromCart }: CartProps) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

