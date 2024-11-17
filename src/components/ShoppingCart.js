// shopping cart code:

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Item removed from the cart.');
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handlePayment = () => {
    alert('Proceeding to payment...');
    navigate('/payment'); // Redirect to payment page
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <p>Size: {product.size}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Total: ₹{product.price * product.quantity}</p>
              <button onClick={() => handleRemove(index)}>Remove</button>
            </div>
          ))}
          <h2>Total Price: ₹{calculateTotalPrice()}</h2>
          <button onClick={handlePayment}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
