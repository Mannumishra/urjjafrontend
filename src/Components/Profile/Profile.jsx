import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [order, setOrder] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    const logout = () => {
        sessionStorage.clear();
        navigate("/login");
    };

    useEffect(() => {
        const getApiData = async () => {
            try {
                let res = await axios.get("http://localhost:8000/api/user/" + sessionStorage.getItem("userid"));
                setUser(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        const getOrderData = async () => {
            try {
                let res = await axios.get("http://localhost:8000/api/checkout/user/" + sessionStorage.getItem("userid"));
                const newData = res.data.data;
                setOrder(newData.reverse());
            } catch (error) {
                console.log(error);
            }
        };

        getApiData();
        getOrderData();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    // Pagination logic
    const totalPages = Math.ceil(order.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const ordersToDisplay = order.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="profile-container">
            <div className="profile-grid">
                <div className="profile-card">
                    {user.image ? (
                        <img src={user.image} alt="Profile" className="profile-pic" />
                    ) : (
                        <img src="/img/noimage.png" alt="No Profile" className="profile-pic" />
                    )}
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <Link to="/update-profile" className="btn btn-primary mb-1 w-50">Update Profile</Link><br />
                    <Link to="/change-password" className="btn btn-primary mb-1 w-50">Change Password</Link><br />
                    <button onClick={logout} className="btn btn-danger w-50">Logout</button>
                </div>

                <div className="profile-info">
                    <h3>User Information</h3>
                    <table className="info-table">
                        <tbody>
                            <tr><th>Address</th><td>{user.address}</td></tr>
                            <tr><th>PIN</th><td>{user.pin}</td></tr>
                            <tr><th>City</th><td>{user.city}</td></tr>
                            <tr><th>State</th><td>{user.state}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="order-history-section">
                <h3>Order History</h3>
                {ordersToDisplay.length > 0 ? (
                    ordersToDisplay.map((item, index) => (
                        <div key={index} className="order-card">
                            <div className="order-summary">
                                <p><strong>Order ID:</strong> {item._id}</p>
                                <p><strong>Order Status:</strong> {item.orderStatus}</p>
                                <p><strong>Payment Mode:</strong> {item.paymentMode}</p>
                                <p><strong>Payment Status:</strong> {item.paymentStatus}</p>
                                <p><strong>Total:</strong> ₹{item.totalPrice}</p>
                                <p><strong>Date:</strong> {(new Date(item.createdAt)).toLocaleDateString()}</p>
                            </div>
                            <div className="order-products">
                                {item.cartItems && item.cartItems.length > 0 ? (
                                    item.cartItems.map((product, idx) => (
                                        <div key={idx} className="product-details">
                                            <img src={product.productimage} alt={product.productname} />
                                            <p>{product.productname}</p>
                                            <p>{product.productnumberofitem} items</p>
                                            <p>₹{product.productprice} x {product.productquantity}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>No products found in this order.</p>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No orders found.</p>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <nav className="pagination-nav">
                    <ul className="pagination-list">
                        {[...Array(totalPages).keys()].map((pageNumber) => (
                            <li key={pageNumber} className={`pagination-item ${currentPage === pageNumber + 1 ? 'active' : ''}`}>
                                <button onClick={() => handlePageChange(pageNumber + 1)}>
                                    {pageNumber + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Profile;
