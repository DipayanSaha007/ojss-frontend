// product-catalog code:

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCatalog = () => {
  const navigate = useNavigate();

  // Jewelry products list
  const products = [
    { name: 'Necklaces', price: 300 },
    { name: 'Earrings', price: 250 },
    { name: 'Rings', price: 400 },
    { name: 'Bracelets', price: 500 },
    { name: 'Anklets', price: 450 },
    { name: 'Brooches', price: 350 },
    { name: 'Cufflinks', price: 450 },
    { name: 'Hairpins', price: 100 },
    { name: 'Body Chains', price: 300 },
    { name: 'Nose Rings', price: 250 },
    { name: 'Toe Rings', price: 350 },
    { name: 'Belly Chains', price: 300 },
    { name: 'Charms', price: 400 },
    { name: 'Chokers', price: 550 },
    { name: 'Watches', price: 700 },
  ];

  const addToCart = (product, quantity, size) => {
    if (quantity === '0') {
      alert('Please select a valid quantity.');
      return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: product.name, price: product.price, size, quantity: Number(quantity) });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(${product.name} has been added to the cart.);
    navigate('/shopping-cart'); // Redirect to the shopping cart
  };

  return (
    <div>
      <h2>Product Catalog</h2>
      {products.map((product) => (
        <div key={product.name} className="product">
          <p>
            {product.name} - ₹{product.price}
          </p>
          <label>
            Size:
            <select id={${product.name}-size}>
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
          <label>
            Quantity:
            <select id={${product.name}-quantity}>
              {[...Array(11).keys()].map((qty) => (
                <option key={qty} value={qty}>
                  {qty}
                </option>
              ))}
            </select>
          </label>
          <button
            onClick={() =>
              addToCart(
                product,
                document.getElementById(${product.name}-quantity).value,
                document.getElementById(${product.name}-size).value
              )
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
