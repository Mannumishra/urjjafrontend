import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const userId = sessionStorage.getItem("userid")
    const [formData, setFormData] = useState({
        userId: userId,
        name: '',
        email: '',
        phone: '',
        address: '',
        state: '',
        city: '',
        pin: '',
        cartItems: [],
        totalPrice: 0,
        transactionId: '',
        orderStatus: 'Order Is Placed',
        paymentMode: 'Online Payment',
        paymentStatus: 'Pending'
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Determine which local storage key to use
    const cartKey = location.state?.source === 'buyNow' ? 'zenscartItemsBuynow' : 'zenscartItems';

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem(cartKey)) || [];
        setFormData(prev => ({ ...prev, cartItems: items }));
    }, [cartKey]);

    useEffect(() => {
        const total = formData.cartItems.reduce((acc, item) => acc + item.productprice * item.productquantity, 0);
        setFormData(prev => ({ ...prev, totalPrice: total }));
    }, [formData.cartItems]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePaymentModeChange = (e) => {
        setFormData(prev => ({ ...prev, paymentMode: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (formData.paymentMode === 'Cash on Delivery') {
            try {
                const response = await axios.post('https://zens-bankend.onrender.com/api/checkout', formData);
                console.log(response);
                toast.success('Checkout completed successfully!');
                localStorage.removeItem(cartKey); // Remove the relevant cart items
                navigate('/order-confirmation');
            } catch (error) {
                console.error(error);
                toast.error('Error during checkout. Please try again.');
            }
            finally {
                setLoading(false);
            }
        }
        else {
            // Handle Razorpay payment
            handleRazorpayPayment();
        }
    };


    const submitOrder = async (paymentId = '') => {
        setLoading(true);
        try {
            const response = await axios.post('https://zens-bankend.onrender.com/api/checkout', {
                ...formData,
                transactionId: paymentId,
                paymentStatus: paymentId ? 'completed' : 'Pending'
            });
            toast.success('Checkout completed successfully!');
            localStorage.removeItem(cartKey); // Remove the relevant cart items
            navigate('/order-confirmation');
        } catch (error) {
            console.error(error);
            toast.error('Error during checkout. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleRazorpayPayment = async () => {
        try {
            const response = await axios.post('https://zens-bankend.onrender.com/api/checkout', formData);
            const { razorpayOrderId, amount, currency } = response.data;
        
            // Convert amount to integer (paise)
            const amountInPaise = Math.round(amount);
        
            const options = {
                key: 'rzp_test_XPcfzOlm39oYi8', // Replace with your Razorpay key
                amount: amountInPaise.toString(), // Ensure amount is a string representation of an integer
                currency: currency,
                name: 'Your Company Name',
                description: 'Payment for your order',
                order_id: razorpayOrderId,
                handler: async function (response) {
                    const paymentId = response.razorpay_payment_id;
                    const orderId = response.razorpay_order_id;
                    const signature = response.razorpay_signature;
        
                    try {
                        // Call the backend to verify the payment
                        await axios.post('https://zens-bankend.onrender.com/api/verify-payment', {
                            razorpay_payment_id: paymentId,
                            razorpay_order_id: orderId,
                            razorpay_signature: signature,
                        });
                        toast.success('Payment successful!');
                        localStorage.removeItem(cartKey); // Remove the relevant cart items
                        navigate('/order-confirmation');
                    } catch (error) {
                        console.error('Payment verification error:', error);
                        toast.error('Error verifying payment. Please try again.');
                    }
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone,
                },
                theme: {
                    color: '#3399cc',
                },
            };
        
            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error('Payment initiation error:', error);
            toast.error('Error initiating payment. Please try again.');
        }
    };
    
    


    useEffect(() => {
        if (cartKey === 'zenscartItemsBuynow') {
            const handleBeforeUnload = () => {
                localStorage.removeItem(cartKey);
            };
            window.addEventListener('beforeunload', handleBeforeUnload);

            // Cleanup on unmount
            return () => {
                window.removeEventListener('beforeunload', handleBeforeUnload);
            };
        }
    }, [cartKey]);

    return (
        <>
            <div className="checkout-section">
                <div className="checkout-wrapper">
                    <h2 className="checkout-title">Checkout</h2>
                    <form onSubmit={handleSubmit} className="checkout-form">
                        <div className="form-field">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="pin">Pin Code</label>
                            <input
                                type="text"
                                id="pin"
                                name="pin"
                                value={formData.pin}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="paymentMode">Payment Mode</label>
                            <select
                                id="paymentMode"
                                name="paymentMode"
                                value={formData.paymentMode}
                                onChange={handlePaymentModeChange}
                                required
                            >
                                <option value="Online Payment">Online Payment</option>
                                <option value="Cash on Delivery">Cash on Delivery</option>
                            </select>
                        </div>


                        <button type="submit" className="submit-button" disabled={loading}>
                            {loading ? 'Processing...' : 'Place Order'}
                        </button>
                    </form>
                </div>
                <div className="summary-wrapper">
                    <h3 className="summary-title text-center">Cart Summary</h3>
                    <div className="cart-summary">

                        <table className="summary-table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {formData.cartItems.map((item, index) => (
                                    <tr key={index}>
                                        <td><img src={item.productimage} alt="" style={{ height: "30px" }} /></td>
                                        <td>{item.productname}</td>
                                        <td>&#8377;{item.productprice}</td>
                                        <td>{item.productquantity}</td>
                                        <td>&#8377;{item.productprice * item.productquantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                    <div>
                        <h6 className="total-price">Total Price: &#8377;{formData.totalPrice}</h6>
                    </div>
                </div>
            </div>

            {/* <div style={{display:"flex"}}> 
                <div className="checkout-wrapper">
                    <h2 className="checkout-title">Checkout</h2>
                    <form onSubmit={handleSubmit} className="checkout-form">
                        <div className="form-field">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="pin">Pin Code</label>
                            <input
                                type="text"
                                id="pin"
                                name="pin"
                                value={formData.pin}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="paymentMode">Payment Mode</label>
                            <select
                                id="paymentMode"
                                name="paymentMode"
                                value={formData.paymentMode}
                                onChange={handlePaymentModeChange}
                                required
                            >
                                <option value="Online Payment">Online Payment</option>
                                <option value="Cash on Delivery">Cash on Delivery</option>
                            </select>
                        </div>


                        <button type="submit" className="submit-button" disabled={loading}>
                            {loading ? 'Processing...' : 'Place Order'}
                        </button>
                    </form>
                </div>
                <div>
                    <h3 className="summary-title text-center">Cart Summary</h3>
                    <div className="cart-summary">

                        <table className="summary-table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {formData.cartItems.map((item, index) => (
                                    <tr key={index}>
                                        <td><img src={item.productimage} alt="" style={{ height: "30px" }} /></td>
                                        <td>{item.productname}</td>
                                        <td>&#8377;{item.productprice}</td>
                                        <td>{item.productquantity}</td>
                                        <td>&#8377;{item.productprice * item.productquantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h6 className="total-price">Total Price: &#8377;{formData.totalPrice}</h6>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Checkout;
