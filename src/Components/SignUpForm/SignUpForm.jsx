import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpForm.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const SignUpForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        image: null
    });

    // Handle input data change
    const getInputData = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            // Update image file
            setData((prevData) => ({ ...prevData, image: files[0] }));
        } else {
            // Update other fields
            setData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    // Handle form submission
    const postData = async (e) => {
        e.preventDefault();
        if (data.phone.length === 10) {
            try {
                setLoading(true);
                const formData = new FormData();
                formData.append("name", data.name);
                formData.append("email", data.email);
                formData.append("phone", data.phone);
                formData.append("password", data.password);
                formData.append("image", data.image); // File needs to be sent as FormData

                const res = await axios.post("https://zens-bankend.onrender.com/api/user", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });

                if (res.status === 200) {
                    toast.success("Signup Successfully");
                    navigate("/login");
                    setLoading(false);
                }
            } catch (error) {
                setLoading(false);
                toast.error(error.response.data.message);
            }
        } else {
            toast.error("Please Check The Phone Number");
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <div className="signup-container">
            <div className="signup-form-wrapper">
                <h2>Sign Up</h2>
                <form onSubmit={postData}>
                    <div className="form-group">
                        <label htmlFor="username">Name<sup className='error-text'>*</sup></label>
                        <input type="text" id="username" name="name" required onChange={getInputData} placeholder='Name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email<sup className='error-text'>*</sup></label>
                        <input type="email" id="email" name="email" required onChange={getInputData} placeholder='Email' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone<sup className='error-text'>*</sup></label>
                        <input type="number" id="phone" name="phone" required onChange={getInputData} placeholder='Phone' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image<sup className='error-text'>*</sup></label>
                        <input type="file" id="image" name="image" required onChange={getInputData} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password<sup className='error-text'>*</sup></label>
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                required
                                onChange={getInputData}
                                placeholder='Password'
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <i className="ri-eye-off-line"></i> : <i className="ri-eye-line"></i>}
                            </button>
                        </div>
                        <p className='error-text' style={{ fontSize: "10px" }}>
                            Your password must be at least 6 characters, include an uppercase letter, a number, and a special symbol.
                        </p>
                    </div>
                    <button type="submit">{loading ? "Please Wait.." : "Sign Up"}</button>
                </form>
                <p className="login-link">
                    If you already have an account, please <Link to="/login">login</Link>.
                </p>
            </div>
        </div>
    );
};

export default SignUpForm;
