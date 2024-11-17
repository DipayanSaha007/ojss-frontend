import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });
  const [upiId, setUpiId] = useState('');
  const [loading, setLoading] = useState(false); // New state for loading indication
  const navigate = useNavigate();

  useEffect(() => {
    // Load payment method from local storage if available
    const savedPaymentMethod = localStorage.getItem('paymentMethod');
    if (savedPaymentMethod) {
      setPaymentMethod(savedPaymentMethod);
    }
  }, []);

  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
    localStorage.setItem('paymentMethod', method); // Save selected payment method to local storage
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleCardSubmit = () => {
    if (cardDetails.number && cardDetails.expiry && cardDetails.cvv) {
      setLoading(true); // Show loading state
      alert('Jewellery bought successfully with Credit Card');
      localStorage.setItem('cardDetails', JSON.stringify(cardDetails)); // Save card details to local storage
  
      // Assuming you have the cart items in a 'cart' state
      const purchasedItems = JSON.parse(localStorage.getItem('cart')) || [];
      localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems)); // Save purchased items
  
      // Clear cart after purchase (optional)
      localStorage.removeItem('cart');
  
      setTimeout(() => { // Simulate some delay before redirecting
        setLoading(false);
        navigate('/dashboard');
      }, 1000); // 1 second delay
    } else {
      alert('Please enter all card details.');
    }
  };
  
  const handleUpiSubmit = () => {
    if (upiId) {
      setLoading(true); // Show loading state
      alert('Jewellery bought successfully with UPI');
      localStorage.setItem('upiId', upiId); // Save UPI ID to local storage
  
      // Same logic as Credit Card for saving purchased items
      const purchasedItems = JSON.parse(localStorage.getItem('cart')) || [];
      localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems)); // Save purchased items
  
      // Clear cart after purchase (optional)
      localStorage.removeItem('cart');
  
      setTimeout(() => { // Simulate some delay before redirecting
        setLoading(false);
        navigate('/dashboard');
      }, 1000); // 1 second delay
    } else {
      alert('Please enter a valid UPI ID.');
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Options</h2>
      {!paymentMethod && (
        <>
          <button onClick={() => handlePaymentSelection('UPI')} className="btn">Pay with UPI</button>
          <button onClick={() => handlePaymentSelection('Credit Card')} className="btn">Pay with Credit Card</button>
        </>
      )}
      
      {paymentMethod === 'Credit Card' && (
        <div className="card-payment-form">
          <h3>Enter Card Details</h3>
          <input
            type="text"
            name="number"
            placeholder="Card Number"
            value={cardDetails.number}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="expiry"
            placeholder="Expiry Date (MM/YY)"
            value={cardDetails.expiry}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="cvv"
            placeholder="CVV"
            value={cardDetails.cvv}
            onChange={handleInputChange}
          />
          <button onClick={handleCardSubmit} className="btn" disabled={loading}>Submit</button>
        </div>
      )}
      
      {paymentMethod === 'UPI' && (
        <div className="upi-payment-form">
          <h3>Enter UPI ID</h3>
          <input
            type="text"
            placeholder="UPI ID"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
          <button onClick={handleUpiSubmit} className="btn" disabled={loading}>Submit</button>
        </div>
      )}

      {loading && (
        <div className="loading-indicator">
          <p>Processing your payment...</p>
        </div>
      )}
    </div>
  );
}

export default Payment;
