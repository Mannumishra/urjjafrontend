import React, { useEffect, useState } from 'react';
import axios from 'axios';  // To make API requests

const HeroSection = () => {
  const [banners, setBanners] = useState([]);

  // Fetch banners from API on component mount
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get('https://zens-bankend.onrender.com/api/banner');
        if (response.status === 200) {
          const activeBanners = response.data.data.filter(banner => banner.active);
          setBanners(activeBanners);
        }
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };
    fetchBanners();
  }, []);

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {banners.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={item.image} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default HeroSection;
