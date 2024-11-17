// Function to create the 'My Orders' page dynamically
function createMyOrdersPage() {
    const body = document.body;

    // Create the main container
    const container = document.createElement('div');
    container.classList.add('orders-container');

    // Create the header
    const header = document.createElement('h2');
    header.textContent = 'My Orders';
    container.appendChild(header);

    // Create the orders list container
    const ordersListDiv = document.createElement('div');
    ordersListDiv.id = 'orders-list';
    container.appendChild(ordersListDiv);

    // Append the container to the body
    body.appendChild(container);

    // Call the function to load orders
    loadOrders();
}

// Function to load orders from the server
function loadOrders() {
    fetch('/get-orders')
        .then(response => response.json())
        .then(data => {
            const ordersDiv = document.getElementById('orders-list');
            ordersDiv.innerHTML = ''; // Clear any existing orders

            // Display the orders
            data.orders.forEach(order => {
                const orderDiv = document.createElement('div');
                orderDiv.innerHTML = `<strong>${order.category}</strong> - Size: ${order.size}, Quantity: ${order.quantity}`;
                ordersDiv.appendChild(orderDiv);
            });
        })
        .catch(error => console.error('Error loading orders:', error)); // Error handling
}

// Call the function to create the 'My Orders' page on page load
createMyOrdersPage();
