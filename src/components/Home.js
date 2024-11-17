import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container">
            <header className="hero-section">
                <h1 className="hero-title">Welcome to the Online Jewellery Shopping</h1>
                <p className="hero-subtitle">Your one-stop destination for premium Jewellery shopping at your convenience.</p>
            </header>
            <nav className="navbar">
                <Link to="/signup" className="nav-link">Sign Up</Link>
                <Link to="/signin" className="nav-link">Sign In</Link>
            </nav>
            <footer className="footer">
                <p>&copy; 2024 Online Jewellery Shopping by Swapnanjan Karmakar. All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Home;
