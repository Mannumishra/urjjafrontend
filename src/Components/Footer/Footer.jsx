import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-white footer">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <a href="index.html" className="d-inline-block mb-3">
                                <h1 className="text-primary">URJAA</h1>
                            </a>
                            <p className="mb-0">Welcome to URJAA! Explore our range of premium herbal medicines, tonics, and health supplements designed to support your wellness journey. Quality you can trust, delivered to your door.</p>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <h5 className="mb-4">Get In Touch</h5>
                            <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <h5 className="mb-4">Our Products</h5>
                            <a className="btn btn-link" href="">Pain Relief Balm</a>
                            <a className="btn btn-link" href="">Herbal Cough Syrup</a>
                            <a className="btn btn-link" href="">Natural Digestive Aid</a>
                            <a className="btn btn-link" href="">Immune Boosting Tonic</a>
                            <a className="btn btn-link" href="">Herbal Sleep Aid</a>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <h5 className="mb-4">Popular Link</h5>
                            <Link className="btn btn-link" to="/about">About Us</Link>
                            <Link className="btn btn-link" to="/contact">Contact Us</Link>
                            <Link className="btn btn-link" to="/privacypolicy">Privacy Policy</Link>
                            <Link className="btn btn-link" to="/term&condition">Terms & Condition</Link>
                            <Link className="btn btn-link" to="/return&refund">Return & Refund Policy</Link>
                            <Link className="btn btn-link" to="/blog">Blog</Link>
                            <Link className="btn btn-link" to="/testimonial">Testimonial</Link>
                        </div>
                    </div>
                </div>
                <div className="container wow fadeIn" data-wow-delay="0.1s">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                                Designed By <a className="border-bottom" href="https://Digiindiasolutions.com">Digi India solutions </a> .
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <Link to="/">Home</Link>
                                    <Link to="/cookies">Cookies</Link>
                                    <Link to="/help">Help</Link>
                                    <Link to="/faq">FAQs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}
        </>
    )
}

export default Footer
