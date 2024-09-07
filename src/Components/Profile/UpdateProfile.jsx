import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './UpdateProfile.css'; // Import the updated CSS file

const UpdateProfile = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        pin: "",
        city: "",
        state: "",
        image: ""
    });

    const getInputData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const getInputFile = (e) => {
        const { name, files } = e.target;
        setData({ ...data, [name]: files[0] });
    };

    const postData = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("phone", data.phone);
            formData.append("address", data.address);
            formData.append("pin", data.pin);
            formData.append("city", data.city);
            formData.append("state", data.state);
            formData.append("image", data.image);
            
            let res = await axios.put(`https://zens-bankend.onrender.com/api/user/${sessionStorage.getItem("userid")}`, formData);
            
            if (res.status === 200) {
                toast.success("Profile updated successfully");
                navigate("/profile");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const getAPIData = async () => {
        try {
            let res = await axios.get(`https://zens-bankend.onrender.com/api/user/${sessionStorage.getItem("userid")}`);
            setData(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAPIData();
    }, []);

    return (
        <div className="update-profile-container">
            <div className="update-profile-form-container">
                <h5 className="update-profile-header"><strong>Update</strong> Profile</h5>
                <form onSubmit={postData}>
                    <div className="form-group">
                        <label>Name <sup className="required">*</sup></label>
                        <input type="text" name="name" value={data.name} onChange={getInputData} placeholder="Enter Name" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>Email <sup className="required">*</sup></label>
                        <input type="email" name="email" value={data.email} onChange={getInputData} placeholder="Enter Email" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>Phone No <sup className="required">*</sup></label>
                        <input type="text" name="phone" value={data.phone} onChange={getInputData} placeholder="Enter Phone Number" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <textarea name="address" onChange={getInputData} placeholder="Enter Full Address" className="form-input" value={data.address ?? ""} />
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <input type="text" name="state" onChange={getInputData} placeholder="Enter State Name" className="form-input" value={data.state ?? ""} />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" name="city" onChange={getInputData} placeholder="Enter City Name" className="form-input" value={data.city ?? ""} />
                    </div>
                    <div className="form-group">
                        <label>Pin</label>
                        <input type="text" name="pin" onChange={getInputData} placeholder="Enter Pin" className="form-input" value={data.pin} />
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input type="file" name="image" onChange={getInputFile} className="form-input" />
                    </div>
                    <div className="form-submit">
                        <button type="submit" className="btn btn-primary">Update Profile</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
