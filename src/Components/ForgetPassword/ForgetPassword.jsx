import React, { useState } from 'react';
import axios from 'axios';
import './ForgetPassword.css'; // Updated CSS file
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const [step, setStep] = useState(1); // Step 1: Enter email, Step 2: Enter OTP, Step 3: Reset Password
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    // Function to handle sending OTP
    const handleSendOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('https://zens-bankend.onrender.com/api/forget-password/send-otp', { email });
            console.log(response);
            toast.success(response.data.message);
            setStep(2); // Move to OTP step
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Error sending OTP');
        }
        setLoading(false);
    };

    // Function to verify OTP
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('https://zens-bankend.onrender.com/api/forget-password/verify-otp', { email, otp });
            toast.success(response.data.message);
            setStep(3); // Move to Reset Password step
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Error verifying OTP');
        }
        setLoading(false);
    };

    // Function to reset password
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post('https://zens-bankend.onrender.com/api/forget-password/reset-password', { email, password });
            toast.success(response.data.message);
            navigate("/login")
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error resetting password');
        }
        setLoading(false);
    };

    return (
        <section className='forget-password-section'>
            <div className="forget-password-box">
                <h4>Forgot Password</h4>
                {step === 1 && (
                    <form onSubmit={handleSendOtp}>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder='Email'
                            className="forget-password-input"
                        />
                        <button type="submit" disabled={loading} className="forget-password-button">
                            {loading ? 'Sending OTP...' : 'Send OTP'}
                        </button>
                    </form>
                )}

                {step === 2 && (
                    <form onSubmit={handleVerifyOtp}>
                        <label>OTP:</label>
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            className="forget-password-input"
                        />
                        <button type="submit" disabled={loading} className="forget-password-button">
                            {loading ? 'Verifying OTP...' : 'Verify OTP'}
                        </button>
                    </form>
                )}

                {step === 3 && (
                    <form onSubmit={handleResetPassword}>
                        <label>New Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="forget-password-input"
                        />
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="forget-password-input"
                        />
                        <button type="submit" disabled={loading} className="forget-password-button">
                            {loading ? 'Resetting Password...' : 'Reset Password'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ForgetPassword;
