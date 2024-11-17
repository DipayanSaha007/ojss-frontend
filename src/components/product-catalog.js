// Function to create the Product Catalog page
function createProductCatalog() {
    const body = document.body;

    // Create Heading
    const heading = document.createElement('h2');
    heading.textContent = 'Product Catalog';
    body.appendChild(heading);

    // Function to create individual product sections
    function createProductSection(productName, price) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productInfo = document.createElement('p');
        productInfo.textContent = `${productName} - ₹${price}`;
        productDiv.appendChild(productInfo);

        // Size selection
        const sizeLabel = document.createElement('label');
        sizeLabel.setAttribute('for', `${productName.toLowerCase()}-size`);
        sizeLabel.textContent = 'Size:';
        productDiv.appendChild(sizeLabel);

        const sizeSelect = document.createElement('select');
        sizeSelect.id = `${productName.toLowerCase()}-size`;
        ['XS', 'S', 'M', 'L', 'XL'].forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            sizeSelect.appendChild(option);
        });
        productDiv.appendChild(sizeSelect);

        // Quantity selection
        const quantityLabel = document.createElement('label');
        quantityLabel.setAttribute('for', `${productName.toLowerCase()}-quantity`);
        quantityLabel.textContent = 'Quantity:';
        productDiv.appendChild(quantityLabel);

        const quantitySelect = document.createElement('select');
        quantitySelect.id = `${productName.toLowerCase()}-quantity`;
        for (let i = 0; i <= 10; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            quantitySelect.appendChild(option);
        }
        productDiv.appendChild(quantitySelect);

        // Add to Cart Button
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.onclick = function () {
            addToCart(productName.toLowerCase(), quantitySelect.value, sizeSelect.value, price);
        };
        productDiv.appendChild(addToCartButton);

        return productDiv;
    }

    // Add product sections to the page
    body.appendChild(createProductSection('Necklaces', 500));
    body.appendChild(createProductSection('Bracelets', 250));

    // Function to add product to the cart
    function addToCart(product, quantity, size, price) {
        const totalPrice = price * quantity;

        // Get cart from localStorage or initialize an empty cart
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add product details to the cart
        const productInCart = { product, quantity, size, totalPrice };
        cart.push(productInCart);

        // Save updated cart in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Redirect to shopping cart page
        window.location.href = 'shopping-cart.js';
    }
}

// Call the function to create the product catalog when the script runs
createProductCatalog();
