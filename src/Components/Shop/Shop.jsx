import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Shop = () => {
    const location = useLocation().pathname;
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(4); // Initial number of products to show
    const [hasMore, setHasMore] = useState(true); // To handle if more products are available

    // Fetch API data
    const getApiData = async () => {
        try {
            const res = await axios.get("https://zens-bankend.onrender.com/api/products");
            console.log(res);
            if (res.status === 200) {
                setProducts(res.data.data);
                // Check if there are more products to load
                if (res.data.data.length <= 4) {
                    setHasMore(false);
                }
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    const filterdata = products.filter((x) => x.productType === 'Shop');

    // Handle load more products
    const loadMoreProducts = () => {
        setVisibleProducts(prevVisible => prevVisible + 4);
        if (visibleProducts + 4 >= filterdata.length) {
            setHasMore(false); // No more products to load
        }
    };
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])

    return (
        <>
            {/* Hero Start */}
            {location === '/shop' && (
                <div className="container-fluid bg-primary hero-header mb-5">
                    <div className="container text-center">
                        <h1 className="display-4 text-white mb-3 animated slideInDown">Buy Our Best Products</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Products</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            )}
            {/* Hero End */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h1 className="text-primary mb-3"><span className="fw-light text-dark">Our Natural</span> Medicines</h1>
                        <p className="mb-5">Our natural medicines provide effective and holistic solutions for your health, using organic ingredients to support your well-being and vitality.</p>
                    </div>
                    <div className="row g-4">
                        {filterdata.slice(0, visibleProducts).map((item, index) => (
                            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s" key={index}>
                                <div className="product-item text-center border h-100 p-4">
                                    <img className="img-fluid mb-4" src={item.productImage[0]} alt={item.productName} />
                                    <a href="" className="h6 d-inline-block mb-2">{item.productName}</a>
                                    <div className="mb-2">
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small>(99)</small>
                                    </div>
                                    <h5 className="text-primary mb-3"><span>{item.productDiscountPercentage}% OFF</span></h5>
                                    <h5 className="text-primary mb-3">&#8377; {item.productFinalPrice} &nbsp; <span><del className='text-danger'>&#8377; {item.productPrice}</del></span></h5>
                                    <Link to={`/details/${item._id}`} className="btn btn-outline-primary px-3">See Details</Link>
                                </div>
                            </div>
                        ))}
                        {hasMore && (
                            <div className="col-12 text-center">
                               {
                                location==="/shop"? <button className="btn btn-primary py-2 px-4" onClick={loadMoreProducts}>Load More Products</button>:
                                <Link className="btn btn-primary py-2 px-4"to="/shop">Load More Products</Link>
                               }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
