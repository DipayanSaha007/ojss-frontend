import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Use the hook for navigation

  // Load cart from local storage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleRemove = (index) => {
    const removedItem = cart[index]; // Correctly reference the item being removed
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update the local storage
  
    // Show an alert after the item is removed
    if (removedItem) {
      alert(`${removedItem.name} has been removed from the cart.`);
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  // Function to navigate to the payment page
  const handlePayment = () => {
    navigate('/payment');
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Size: {product.size}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Total Price: ${product.price * product.quantity}</p>
              <button onClick={() => handleRemove(index)}>Remove</button>
            </div>
          ))}
          <h2>Total: ${calculateTotalPrice()}</h2>
          <button onClick={handlePayment}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;