// Function to create the Product Catalog page dynamically
function createProductCatalogPage() {
    const body = document.body;

    // Create the main container
    const container = document.createElement('div');
    container.classList.add('catalog-container');

    // Create the header
    const header = document.createElement('h2');
    header.textContent = 'Select Product Category';
    container.appendChild(header);

    // Create the form
    const form = document.createElement('form');
    form.id = 'catalog-form';

    // Create Category Label and Select Input
    const categoryLabel = document.createElement('label');
    categoryLabel.setAttribute('for', 'category');
    categoryLabel.textContent = 'Choose a category:';
    const categorySelect = document.createElement('select');
    categorySelect.id = 'category';
    categorySelect.required = true;

    // Adding options to category select
    const categories = ['Necklace', 'Bracelets', 'Earrings', 'Rings', 'Anklets', 'Body Jewellery'];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    // Create Quantity Label and Input
    const quantityLabel = document.createElement('label');
    quantityLabel.setAttribute('for', 'quantity');
    quantityLabel.textContent = 'Quantity:';
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.id = 'quantity';
    quantityInput.min = '1';
    quantityInput.required = true;

    // Create Size Label and Input
    const sizeLabel = document.createElement('label');
    sizeLabel.setAttribute('for', 'size');
    sizeLabel.textContent = 'Size:';
    const sizeInput = document.createElement('input');
    sizeInput.type = 'text';
    sizeInput.id = 'size';
    sizeInput.placeholder = 'Enter size';
    sizeInput.required = true;

    // Create Add to Cart Button
    const addToCartButton = document.createElement('button');
    addToCartButton.type = 'button';
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.onclick = addToCart;  // Call addToCart function when clicked

    // Create Continue to Payment Button
    const proceedToPaymentButton = document.createElement('button');
    proceedToPaymentButton.type = 'button';
    proceedToPaymentButton.textContent = 'Continue to Payment';
    proceedToPaymentButton.onclick = proceedToPayment;  // Call proceedToPayment function when clicked

    // Append all form elements to the form
    form.appendChild(categoryLabel);
    form.appendChild(categorySelect);
    form.appendChild(quantityLabel);
    form.appendChild(quantityInput);
    form.appendChild(sizeLabel);
    form.appendChild(sizeInput);
    form.appendChild(addToCartButton);
    form.appendChild(proceedToPaymentButton);

    // Append the form to the container
    container.appendChild(form);

    // Append the container to the body of the page
    body.appendChild(container);
}

// Function to handle Add to Cart functionality
function addToCart() {
    const category = document.getElementById("category").value;
    const quantity = document.getElementById("quantity").value;
    const size = document.getElementById("size").value;

    // Simulate adding to cart by sending a POST request
    fetch('/add-to-cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, quantity, size })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);  // Show the message from the server
    })
    .catch(error => console.error('Error:', error));  // Log any errors
}

// Function to handle Continue to Payment functionality
function proceedToPayment() {
    // Redirect to the payment page
    alert("Redirecting to payment page...");
    window.location.href = 'payment.js';  // Redirect to payment page (you need to create payment.html)
}

// Call the function to create the Product Catalog page when the page loads
createProductCatalogPage();
