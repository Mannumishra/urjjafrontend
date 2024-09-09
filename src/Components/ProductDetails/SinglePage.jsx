
import React, { useEffect, useState } from 'react';
import './Singlepage.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Product from '../Product/Product';

const SinglePage = () => {
  const navigate = useNavigate();
  const [singleData, setSingleData] = useState({});
  const [backendImages, setBackendImages] = useState([]);
  const { _id } = useParams();
  const [qty, setQty] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const login = sessionStorage.getItem("login")


  const getsingleProductData = async () => {
    try {
      let res = await axios.get(`http://localhost:8000/api/products/${_id}`);
      console.log(res);
      setSingleData(res.data.data);
      if (res.data.data.productImage && Array.isArray(res.data.data.productImage)) {
        setBackendImages(res.data.data.productImage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsingleProductData();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? backendImages.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === backendImages.length - 1 ? 0 : prevIndex + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const addToCart = () => {
    const cartItem = {
      id: singleData._id,
      productname: singleData.productName,
      productprice: singleData.productFinalPrice,
      productquantity: qty,
      productitem: singleData.productItem,
      productnumberofitem: singleData.productItemNumberOf,
      productimage: backendImages[0]
    };
    const existingCart = JSON.parse(localStorage.getItem('zenscartItems')) || [];
    const productIndex = existingCart.findIndex(item => item.id === cartItem.id);
    if (productIndex >= 0) {
      existingCart[productIndex].quantity += qty;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem('zenscartItems', JSON.stringify(existingCart));
    toast.success('Product added to cart successfully!');
  };

  const handleBuyNow = () => {
    const cartItem = {
      id: singleData._id,
      productname: singleData.productName,
      productprice: singleData.productFinalPrice,
      productquantity: qty,
      productitem: singleData.productItem,
      productnumberofitem: singleData.productItemNumberOf,
      productimage: backendImages[0]
    };
    const existingCart = JSON.parse(localStorage.getItem('zenscartItemsBuynow')) || [];
    const productIndex = existingCart.findIndex(item => item.id === cartItem.id);
    if (productIndex >= 0) {
      existingCart[productIndex].quantity += qty;
    } else {
      existingCart.push(cartItem);
    }
    localStorage.setItem('zenscartItemsBuynow', JSON.stringify(existingCart));
    // Check if the user is logged in
    if (login) {
      navigate('/checkout', { state: { source: 'buyNow' } });
    } else {
      // Redirect to login page if not logged in
      navigate('/login', { state: { fromBuyNow: true } });
    }
  };


  return (
    <>
      <div className="product-details-container">
        <div className="product-details-inner">
          <div className="product-image-column">
            <div className="image-carousel">
              <div className="carousel-slides">
                {backendImages.map((image, index) => (
                  <div
                    className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}
                    key={index}
                  >
                    <img src={image} className="carousel-image" alt={`Slide ${index}`} />
                  </div>
                ))}
              </div>
              <button className="carousel-prev" onClick={handlePrevClick}>
                <span className="carousel-prev-icon">&#9664;</span>
              </button>
              <button className="carousel-next" onClick={handleNextClick}>
                <span className="carousel-next-icon">&#9654;</span>
              </button>
            </div>
            <div className="thumbnail-gallery">
              {backendImages.map((image, index) => (
                <img
                  src={image}
                  className={`thumbnail-image ${index === currentImageIndex ? 'active' : ''}`}
                  alt={`Thumbnail ${index}`}
                  onClick={() => handleThumbnailClick(index)}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="product-info-column">
            <p className="product-title">{singleData.productCategory}</p>
            <p className="product-description">{singleData.productName}</p>
            <div className="rating">
              <i className="fa fa-star rating-icon"></i>
              <i className="fa fa-star rating-icon"></i>
              <i className="fa fa-star rating-icon"></i>
              <i className="fa fa-star rating-icon"></i>
              <i className="fa fa-star rating-icon-empty"></i>
              <p className="rating-count">(1210)</p>
            </div>
            <div className="size-options">
              {/* Add your size options here */}
            </div>
            <div className="price-info">
              <div>
                <del className='original-price'>Rs.{singleData.productPrice}</del>
              </div>
              <div className='current-price'>
                Rs.{singleData.productFinalPrice}
              </div>
              <div>
                | Save {singleData.productDiscountPercentage} %
              </div>
            </div>
            <p><strong>Brand</strong> : {singleData.productBrand}</p>
            <p><strong>Item Form</strong> : {singleData.productItem}</p>
            <p><strong>Number of Items</strong> : {singleData.productItemNumberOf}</p>
            <p><strong>Net Quantity</strong> : {singleData.productQuantity}</p>
            <p>{singleData.productDescription}</p>
            <p dangerouslySetInnerHTML={{ __html: singleData.productDetails }}></p>
            <div className="quantity-control">
              <button className="quantity-button" onClick={() => qty > 1 ? setQty(qty - 1) : ""}>-</button>
              <p className="quantity-display">{qty}</p>
              <button className="quantity-button" onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <div className='action-buttons'>
              <button className="cart-button" onClick={addToCart}>
                <i className="fa fa-shopping-bag"></i> Add to cart
              </button>
              <button className="buy-now-button" onClick={handleBuyNow}>
                <i className="fa fa-shopping-bag"></i> Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div>
        <Product />
      </div>
    </>
  );
};

export default SinglePage;

