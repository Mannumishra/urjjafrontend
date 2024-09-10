import React from 'react';
import './OrderConfirmation.css'; // Import the CSS file

const OrderConfirmation = () => {
    return (
        <div className="order-confirmation-container">
            <header className="order-confirmation-header">
                <img
                    src="https://urjjafrontend-git-main-mannu-s-projects.vercel.app/static/media/ZENS%20logo%20TM%20CDR%20(1).20ad0761e23f3c801c7f.png"
                    alt="Zens Logo"
                    className="order-confirmation-logo"
                />
            </header>
            <main className="order-confirmation-main">
                <div className="order-confirmation-message">
                    <h1>Thank You for Your Order!</h1>
                    <p>Your order has been confirmed and is now being processed. We will send you an email with the details shortly.</p>
                </div>
                <div className="order-confirmation-details">
                    <h2>Order Details</h2>
                    <p><strong>Order Number:</strong> #123456</p>
                    <p><strong>Order Date:</strong> September 9, 2024</p>
                    <p><strong>Shipping Address:</strong> 123 Zens Street, Zen City, ZC 12345</p>
                    <p><strong>Total Amount:</strong> $123.45</p>
                </div>
                <div className="order-confirmation-contact">
                    <h2>Need Help?</h2>
                    <p>If you have any questions or need assistance, feel free to <a href="mailto:support@zens.com">contact us</a>.</p>
                </div>
            </main>
            <footer className="order-confirmation-footer">
                <p>&copy; 2024 Zens. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default OrderConfirmation;
