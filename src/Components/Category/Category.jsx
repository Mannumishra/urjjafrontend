import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
    const location = window.location.pathname;

    const [category, setCategory] = useState('All');
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(4);
    const [hasMore, setHasMore] = useState(true);

    // Fetch API data
    const getApiData = async () => {
        try {
            const res = await axios.get("http://localhost:8000/api/category");
            if (res.status === 200) {
                setProducts(res.data.data);
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

    // Handle filtering based on category
    const filterData = products.filter((item) =>
        category === 'All' || item.name.toLowerCase() === category.toLowerCase()
    );

    // Handle load more products
    const loadMoreProducts = () => {
        setVisibleProducts(prevVisible => {
            const newVisible = prevVisible + 4;
            if (newVisible >= filterData.length) {
                setHasMore(false);
            }
            return newVisible;
        });
    };

    // Scroll to top when component loads
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <>
            {/* Hero Start */}
            {location === '/product' && (
                <div className="container-fluid bg-primary hero-header mb-5">
                    <div className="container text-center">
                        <h1 className="display-4 text-white mb-3 animated slideInDown">Products</h1>
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
                        <h1 className="text-primary mb-3"><span className="fw-light text-dark">Our Natural</span> Category</h1>
                        <p className="mb-5">Our natural medicines provide effective and holistic solutions for your health, using organic ingredients to support your well-being and vitality.</p>
                    </div>

                    {/* Category Filter */}
                    {/* <div className="row mb-4">
                        <div className="col-md-9"></div>
                        <div className="col-md-3">
                            <div className="filter-section">
                                <div className="mb-1">
                                    <label htmlFor="category" className="form-label">Category</label>
                                    <select
                                        className="form-control"
                                        id="category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="All">All</option>
                                        {products.map((item, index) => (
                                            <option key={index} value={item.name}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="row g-4">
                        <div className="col-md-12">
                            <div className="row g-4">
                                {filterData.slice(0, visibleProducts).map((item, index) => (
                                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s" key={index}>
                                        <Link to="/product">
                                            <div className="product-item text-center border h-100 p-4">
                                                <img className="img-fluid mb-4" src={item.image} alt={item.name} />
                                                <a href="" className="h6 d-inline-block mb-2">{item.name}</a>
                                                <div className="mb-2">
                                                    <small className="fa fa-star text-warning"></small>
                                                    <small className="fa fa-star text-warning"></small>
                                                    <small className="fa fa-star text-warning"></small>
                                                    <small className="fa fa-star text-warning"></small>
                                                    <small className="fa fa-star text-warning"></small>
                                                    <small>(99)</small>
                                                </div>
                                                <Link className="btn btn-outline-primary px-3" to={`/details/${item._id}`}>See Details</Link>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            {hasMore && (
                                <div className="col-12 text-center">
                                    {location === "/product" ? (
                                        <button className="btn btn-primary py-2 px-4" onClick={loadMoreProducts}>
                                            Load More Products
                                        </button>
                                    ) : (
                                        <Link className="btn btn-primary py-2 px-4" to="/product">
                                            Load More Products
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
