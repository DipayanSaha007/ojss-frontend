import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [cancellationReason, setCancellationReason] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const navigate = useNavigate();

  // Load purchased items from local storage
  useEffect(() => {
    const purchasedItems = localStorage.getItem('purchasedItems');
    setOrders(purchasedItems ? JSON.parse(purchasedItems) : []); // If nothing in localStorage, use empty array
  }, []);

  const handleCancelOrder = (order) => {
    const reason = cancellationReason === 'Others' ? otherReason : cancellationReason;

    if (!reason) {
      alert('Please select a reason for cancellation.');
      return;
    }

    // Update the order status to "Cancelled"
    order.status = 'Cancelled';

    // Update the orders array
    const updatedOrders = orders.map(o =>
      o.id === order.id ? order : o
    );

    // Update the state and localStorage
    setOrders(updatedOrders);
    localStorage.setItem('purchasedItems', JSON.stringify(updatedOrders));

    // Show alert and redirect
    alert(`Order has been cancelled. Reason: ${reason}`);
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>My Orders</h1>
      {orders.length === 0 ? (
        <p>You haven't made any purchases yet.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} style={{ marginBottom: '20px' }}>
            <h3>{order.name}</h3>
            <p>Status: {order.status}</p>
            {order.status !== 'Cancelled' && order.status !== 'Delivered' && (
              <div>
                <button onClick={() => navigate(`/order-status`)}>
                  Order Status
                </button>
                <button onClick={() => setSelectedOrder(order)}>
                  Cancel Order
                </button>
              </div>
            )}
          </div>
        ))
      )}

      {selectedOrder && (
        <div style={{ marginTop: '20px' }}>
          <h3>Cancel Order</h3>
          <label htmlFor="cancellation-reason">Select reason for cancellation:</label>
          <select
            id="cancellation-reason"
            value={cancellationReason}
            onChange={(e) => setCancellationReason(e.target.value)}
          >
            <option value="">-- Select a reason --</option>
            <option value="Size does not fit">Size does not fit</option>
            <option value="I don't need the product">I don't need the product</option>
            <option value="Ordered mistakenly">Ordered mistakenly</option>
            <option value="Received defective product">Received defective product</option>
            <option value="Cannot pickup delivery">Cannot pickup delivery</option>
            <option value="Will order later">Will order later</option>
            <option value="Others">Others</option>
          </select>

          {cancellationReason === 'Others' && (
            <div style={{ marginTop: '10px' }}>
              <label htmlFor="other-reason">Enter reason:</label>
              <input
                type="text"
                id="other-reason"
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
              />
            </div>
          )}

          <button
            style={{ marginTop: '10px' }}
            onClick={() => handleCancelOrder(selectedOrder)}
          >
            Confirm Cancellation
          </button>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
