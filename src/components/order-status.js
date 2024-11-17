import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const OrderStatus = () => {
  const [order, setOrder] = useState(null);
  const [status, setStatus] = useState('');
  const { orderId } = useParams(); // Get the order ID from the URL
  const navigate = useNavigate();

  // Sample status flow
  const orderStatusFlow = [
    'Item Purchased',
    'Payment Verified',
    'Out for Delivery',
    'Delivered',
    'Cancelled',
  ];

  // Simulate fetching order details (you can fetch real data here from your backend or localStorage)
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('purchasedItems')) || [];
    const foundOrder = storedOrders.find((order) => order.id === orderId);

    if (foundOrder) {
      setOrder(foundOrder);
      setStatus(foundOrder.status);
    } else {
      alert('Order not found.');
      navigate('/my-orders');
    }
  }, [orderId, navigate]);

  // Function to update order status (this is just an example of how you could allow users to update the status)
  const updateOrderStatus = (newStatus) => {
    const updatedOrder = { ...order, status: newStatus };
    setOrder(updatedOrder);
    setStatus(newStatus);

    // Update the order in localStorage (for persistence across sessions)
    const storedOrders = JSON.parse(localStorage.getItem('purchasedItems')) || [];
    const updatedOrders = storedOrders.map((o) =>
      o.id === orderId ? updatedOrder : o
    );
    localStorage.setItem('purchasedItems', JSON.stringify(updatedOrders));
  };

  return (
    <div>
      <h1>Order Status</h1>

      {order ? (
        <div>
          <h3>Order ID: {order.id}</h3>
          <p><strong>Product:</strong> {order.name}</p>
          <p><strong>Current Status:</strong> {status}</p>

          <div>
            <h4>Order Status Flow:</h4>
            <ul>
              {orderStatusFlow.map((step, index) => (
                <li key={index} style={{ color: index <= orderStatusFlow.indexOf(status) ? 'green' : 'gray' }}>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* You can add a button to simulate the order progression (for demonstration purposes) */}
          {status !== 'Delivered' && status !== 'Cancelled' && (
            <div>
              <button
                onClick={() => updateOrderStatus(orderStatusFlow[orderStatusFlow.indexOf(status) + 1])}
              >
                Next Status
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
};

export default OrderStatus;
