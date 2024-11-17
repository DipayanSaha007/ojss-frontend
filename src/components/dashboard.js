// dashboard code:

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles/Dashboard.module.css';

function Dashboard() {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Clear authentication state here if needed, such as localStorage or sessionStorage
        navigate('/'); // Navigate to the home page ("/")
    };

    return (
        <div className={styles.container}>
            {/* Sign Out Button */}
            <div className={styles.signOutBtn}>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>

            <h2>Welcome to your Dashboard!</h2>

            {/* Product Catalog Card */}
            <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <h3>Product Catalog</h3>
                </div>
                <div className={styles.cardBody}>
                    <p>Explore and add jewelry to your cart. <Link to="/product-catalog">"View Product Catalog"</Link></p>
                </div>
            </div>

            // {/* Search Jewelry Card */}
            // <div className={styles.card}>
            //     <div className={styles.cardTitle}>
            //         <h3>Search Jewellery</h3>
            //     </div>
            //     <div className={styles.cardBody}>
            //         <p>Search for your desired jewelry. <Link to="/search-product">"Search Jewellery"</Link></p>
            //     </div>
            // </div>

            {/* Shopping Cart Card */}
            <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <h3>Shopping Cart</h3>
                </div>
                <div className={styles.cardBody}>
                    <p>View your added items in the cart. <Link to="/shopping-cart">"Shopping Cart"</Link></p>
                </div>
            </div>

            {/* My Orders Card */}
            <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <h3>My Orders</h3>
                </div>
                <div className={styles.cardBody}>
                    <p>View your order history. <Link to="/my-orders">"Your Orders"</Link></p>
                </div>
            </div>

            {/* Edit Profile Card */}
            <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <h3>Edit Profile</h3>
                </div>
                <div className={styles.cardBody}>
                    <p>Update your profile details. <Link to="/edit-profile">"Edit Profile"</Link></p>
                </div>
            </div>

            {/* Customer Queries Card */}
            <div className={styles.card}>
                <div className={styles.cardTitle}>
                    <h3>Customer Queries</h3>
                </div>
                <div className={styles.cardBody}>
                    <p>Have any questions? Submit your query. <Link to="/customer-query">"Submit a Query"</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
