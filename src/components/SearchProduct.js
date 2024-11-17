import React, { useState } from 'react';

// Sample product catalog
const productCatalog = [
  { name: 'Necklace', price: 50, quantity: 10, size: 'M' },
  { name: 'Bracelets', price: 30, quantity: 15, size: 'S' },
  { name: 'Anklets', price: 25, quantity: 12, size: 'L' },
  { name: 'Earrings', price: 20, quantity: 20, size: 'M' },
  { name: 'Rings', price: 40, quantity: 8, size: 'L' },
  { name: 'Body Jewellery', price: 60, quantity: 5, size: 'M' }
];

const SearchProduct = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchedProduct, setSearchedProduct] = useState(null);

  const handleSearch = () => {
    const foundProduct = productCatalog.find(product =>
      product.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    if (foundProduct) {
      setSearchedProduct(foundProduct);
    } else {
      setSearchedProduct(null);
    }
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to the cart.`);
  };

  return (
    <div>
      <h1>Search Product</h1>
      <input
        type="text"
        placeholder="Search for a product"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchedProduct ? (
        <div>
          <h2>{searchedProduct.name}</h2>
          <p>Price: ${searchedProduct.price}</p>
          <p>Quantity: {searchedProduct.quantity}</p>
          <p>Size: {searchedProduct.size}</p>
          <button onClick={() => handleAddToCart(searchedProduct)}>Add to Cart</button>
        </div>
      ) : (
        searchKeyword && (
          <p>This product is currently not available, please search any product from the product catalog.</p>
        )
      )}
    </div>
  );
};

export default SearchProduct;
