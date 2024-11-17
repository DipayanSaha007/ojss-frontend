import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
    const [newUsername, setNewUsername] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);  // Added loading state
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        if (!newUsername || !email || !newPassword) {
            setErrorMessage('All fields are required');
            return;
        }

        if (!validatePassword(newPassword)) {
            setErrorMessage('Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character.');
            return;
        }

        setErrorMessage('');
        setSuccessMessage('');
        setLoading(true);  // Start loading state

        try {
            const response = await fetch(`http://localhost:5000/edit-profile`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, newUsername, newPassword })
            });

            const data = await response.json();

            setLoading(false);  // Stop loading state

            if (response.ok) {
                setSuccessMessage(data.message);
                navigate('/dashboard');
            } else {
                setErrorMessage(data.message);
            }
        } catch (error) {
            setLoading(false);  // Stop loading state
            setErrorMessage('Error updating profile. Please try again.');
        }
    };

    return (
        <div className="container">
            <h2>Edit Profile</h2>
            <form onSubmit={handleUpdateProfile}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="New Username"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Updating...' : 'Update Profile'}
                </button>
            </form>
            <div>
                <button className="go-back-btn" onClick={() => navigate('/dashboard')}>Go Back</button>
            </div>
        </div>
    );
}

export default EditProfile;
