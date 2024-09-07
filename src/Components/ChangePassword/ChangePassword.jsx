import React, { useState } from 'react';
import './ChangePassword.css';
import axios from 'axios';

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const email = sessionStorage.getItem("email")

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (newPassword !== confirmPassword) {
                setError('New passwords do not match');
                return;
            }
            const res = await axios.post("http://localhost:8000/api/user/chnage-password", { email: email, currentPassword: currentPassword, newPassword: newPassword })
            console.log(res)
            setSuccess('Password changed successfully');
            setError('');
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="change-password-container">
            <h2>Change Password</h2>
            <form onSubmit={handleSubmit} className="change-password-form">
                <div className="form-group">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                        type="password"
                        id="currentPassword"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <button type="submit" className="submit-button">Change Password</button>
            </form>
        </div>
    );
};

export default ChangePassword;
