import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import for React 18
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/signin';
import ForgotPassword from './components/ForgotPassword';
import EditProfile from './components/EditProfile';
import Dashboard from './components/dashboard';
import CustomerQuery from './components/CustomerQuery';
// import SearchProduct from './components/SearchProduct';
// import Catalog from './components/Catalog';
import ProductCatalog from './components/product-catalog';
import MyOrders from './components/my-orders';
// import Orders from './components/Orders';
import OrderStatus from './components/order-status';
import Payment from './components/payment';
import ShoppingCart from './components/ShoppingCart';

import './css/styles.css'; // Import your styles
import reportWebVitals from './reportWebVitals';

// Create the root for React 18 and render the application
const root = ReactDOM.createRoot(document.getElementById('root'));  // createRoot API
root.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home is the default route */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          {/* <Route path="/search-product" element={<SearchProduct />} /> */}
          <Route path="/customer-query" element={<CustomerQuery />} />
          {/* <Route path="/catalog" element={<Catalog />} /> */}
          <Route path="/product-catalog" element={<ProductCatalog />} />
          <Route path="/my-orders" element={<MyOrders />} />
          {/* <Route path="/orders" element={<Orders />} /> */}
          <Route path="/order-status" element={<OrderStatus />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="*" element={<div>Page not found</div>} /> {/* Fallback route */}
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

// Report web vitals
reportWebVitals();
