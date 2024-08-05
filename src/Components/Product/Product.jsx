import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../Images/WhatsApp Image 2024-08-05 at 12.53.19.jpeg'
import image2 from '../../Images/WhatsApp Image 2024-08-05 at 12.53.23.jpeg'
import image3 from '../../Images/WhatsApp Image 2024-08-05 at 12.53.26 (1).jpeg'
import image4 from '../../Images/WhatsApp Image 2024-08-05 at 12.53.26.jpeg'
import image5 from '../../Images/WhatsApp Image 2024-08-05 at 12.53.27.jpeg'
import image6 from '../../Images/WhatsApp Image 2024-08-05 at 12.53.28.jpeg'
import image7 from '../../Images/WhatsApp Image 2024-08-05 at 12.53.29.jpeg'
import image8 from '../../Images/WhatsApp Image 2024-08-05 at 12.53.30.jpeg'

const Product = () => {
    const location = window.location.pathname

    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(10000)
    const [category, setCategory] = useState('')

    const products = [
        {
            _id: '1',
            productImage3: image1,
            categoryName: 'Shampoo',
            productSize: [{ finalPrice: 499, discountPrice: 10, price: 550 }]
        },
        {
            _id: '2',
            productImage3: image2,
            categoryName: 'Conditioner',
            productSize: [{ finalPrice: 399, discountPrice: 5, price: 420 }]
        },
        {
            _id: '3',
            productImage3: image3,
            categoryName: 'Shampoo',
            productSize: [{ finalPrice: 499, discountPrice: 10, price: 550 }]
        },
        {
            _id: '4',
            productImage3: image4,
            categoryName: 'Conditioner',
            productSize: [{ finalPrice: 399, discountPrice: 5, price: 420 }]
        },
        {
            _id: '5',
            productImage3: image5,
            categoryName: 'Shampoo',
            productSize: [{ finalPrice: 499, discountPrice: 10, price: 550 }]
        },
        {
            _id: '6',
            productImage3: image6,
            categoryName: 'Conditioner',
            productSize: [{ finalPrice: 399, discountPrice: 5, price: 420 }]
        },
        {
            _id: '7',
            productImage3: image7,
            categoryName: 'Shampoo',
            productSize: [{ finalPrice: 499, discountPrice: 10, price: 550 }]
        },
        {
            _id: '8',
            productImage3: image8,
            categoryName: 'Conditioner',
            productSize: [{ finalPrice: 399, discountPrice: 5, price: 420 }]
        },
    ]

    const categories = [
        { categoryName: 'Shampoo' },
        { categoryName: 'Conditioner' },
        // Add more categories as needed
    ]

    const filterProducts = () => {
        let filtered = products.filter(item => {
            let productPrice = item.productSize[0].finalPrice
            let matchesCategory = category ? item.categoryName === category : true
            return productPrice >= minPrice && productPrice <= maxPrice && matchesCategory
        })
        return filtered
    }

    const filteredProducts = filterProducts()

    return (
        <>
            {/* <!-- Hero Start --> */}
            {
                location === '/product' ? <div className="container-fluid bg-primary hero-header mb-5">
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
                </div> : null
            }
            {/* <!-- Hero End --> */}


            {/* <!-- Product Start --> */}
            {
                location === '/product' ?
                    <div className="container-fluid py-5">
                        <div className="container">
                            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                                <h1 className="text-primary mb-3"><span className="fw-light text-dark">Our Natural</span> Medicines</h1>
                                <p className="mb-5">Our natural medicines provide effective and holistic solutions for your health, using organic ingredients to support your well-being and vitality.</p>
                            </div>

                            <div className="row g-4">
                                <div className="col-md-3">
                                    <div className="filter-section">
                                        <div className="mb-1">
                                            <label htmlFor="category" className="form-label">Category</label>
                                            <select className="form-control" id="category" value={category} onChange={e => setCategory(e.target.value)}>
                                                <option value="">All</option>
                                                {
                                                    categories.map((item, index) =>
                                                        <option key={index} value={item.categoryName}>{item.categoryName}</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor="minPrice" className="form-label">Min Price</label>
                                            <input type="number" className="form-control" id="minPrice" value={minPrice} onChange={e => setMinPrice(Number(e.target.value))} />
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor="maxPrice" className="form-label">Max Price</label>
                                            <input type="number" className="form-control" id="maxPrice" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="row g-4">
                                        {filteredProducts.map((item, index) => (
                                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s" key={index}>
                                                <div className="product-item text-center border h-100 p-4">
                                                    <img className="img-fluid mb-4" src={item.productImage3} alt="" />
                                                    <a href="" className="h6 d-inline-block mb-2">{item.categoryName}</a>
                                                    <div className="mb-2">
                                                        <small className="fa fa-star text-warning"></small>
                                                        <small className="fa fa-star text-warning"></small>
                                                        <small className="fa fa-star text-warning"></small>
                                                        <small className="fa fa-star text-warning"></small>
                                                        <small className="fa fa-star text-warning"></small>
                                                        <small>(99)</small>
                                                    </div>
                                                    <h5 className="text-primary mb-3"><span>{item.productSize[0].discountPrice}% OFF</span></h5>
                                                    <h5 className="text-primary mb-3">&#8377; {item.productSize[0].finalPrice} &nbsp; <span><del className='text-danger'>&#8377; {item.productSize[0].price}</del></span></h5>
                                                    <Link to={`/details/${item._id}`} className="btn btn-outline-primary px-3">See Details</Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col-12 text-center mt-4">
                                        <a className="btn btn-primary py-2 px-4" href="">Load More Products</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container-fluid py-5">
                        <div className="container">
                        <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                                <h1 className="text-primary mb-3"><span className="fw-light text-dark">Our Natural</span> Medicines</h1>
                                <p className="mb-5">Our natural medicines provide effective and holistic solutions for your health, using organic ingredients to support your well-being and vitality.</p>
                            </div>
                            <div className="row g-4">
                                {
                                    products.map((item, index) =>
                                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s" key={index}>
                                            <div className="product-item text-center border h-100 p-4">
                                                <img className="img-fluid mb-4" src={item.productImage3} alt="" />
                                                <a href="" className="h6 d-inline-block mb-2">{item.categoryName}</a>
                                                <div className="mb-2">
                                                    <small className="fa fa-star text-warning"></small>
                                                    <small className="fa fa-star text-warning"></small>
                                                    <small className="fa fa-star text-warning"></small>
                                                    <small className="fa fa-star text-warning"></small>
                                                    <small className="fa fa-star text-warning"></small>
                                                    <small>(99)</small>
                                                </div>
                                                <h5 className="text-primary mb-3"><span>{item.productSize[0].discountPrice}% OFF</span></h5>
                                                <h5 className="text-primary mb-3">&#8377; {item.productSize[0].finalPrice} &nbsp; <span><del className='text-danger'>&#8377; {item.productSize[0].price}</del></span></h5>
                                                <Link to={`/details/${item._id}`} className="btn btn-outline-primary px-3">See Details</Link>
                                            </div>
                                        </div>
                                    )}
                                <div className="col-12 text-center">
                                    <a className="btn btn-primary py-2 px-4" href="">Load More Products</a>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            {/* <!-- Product End --> */}
        </>
    )
}

export default Product
