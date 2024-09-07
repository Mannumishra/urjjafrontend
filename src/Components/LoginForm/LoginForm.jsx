import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const LoginForm = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);

    const getInputData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/user/login", data);
            console.log(res)
            if (res.status === 200) {
                toast.success("Login Successfully");
                sessionStorage.setItem("login", true);
                sessionStorage.setItem("userid", res.data.data._id);
                sessionStorage.setItem("name", res.data.data.name);
                sessionStorage.setItem("email", res.data.data.email);
                sessionStorage.setItem("phone", res.data.data.phone);
                navigate("/");
                window.location.reload();
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <div className="login-container">
            <div className="login-form-wrapper">
                <h2 className="login-heading">Login</h2>
                <form onSubmit={postData} className="login-form">
                    <div className="form-field">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="form-input"
                            onChange={getInputData}
                        />
                    </div>
                    <div className="form-field password-field">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            required
                            className="form-input"
                            onChange={getInputData}
                        />
                        <button
                            type="button"
                            className="password-toggle-btn"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <i className="ri-eye-off-line"></i> : <i className="ri-eye-line"></i>}
                        </button>
                    </div>
                    <button type="submit" className="submit-btn">Login</button>
                    <p><Link to='/forget-password' className='mt-1'>Forget Password ?</Link></p>
                </form>
                <p className="signup-prompt">
                    If you don't have an account, please <Link to="/signup" className="signup-link">sign up</Link>.
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
